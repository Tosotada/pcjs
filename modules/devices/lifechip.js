/**
 * @fileoverview Simulates a "Game of Life" Chip
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © Jeff Parsons 2012-2017
 *
 * This file is part of PCjs, a computer emulation software project at <http://pcjs.org/>.
 *
 * PCjs is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * PCjs is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with PCjs.  If not,
 * see <http://www.gnu.org/licenses/gpl.html>.
 *
 * You are required to include the above copyright notice in every modified copy of this work
 * and to display that copyright notice when the software starts running; see COPYRIGHT in
 * <http://pcjs.org/modules/devices/machine.js>.
 *
 * Some PCjs files also attempt to load external resource files, such as character-image files,
 * ROM files, and disk image files. Those external resource files are not considered part of PCjs
 * for purposes of the GNU General Public License, and the author does not claim any copyright
 * as to their contents.
 */

"use strict";

/**
 * "Game of Life" Chip
 *
 * @class {Chip}
 * @unrestricted
 */
class Chip extends Device {
    /**
     * Chip(idMachine, idDevice, config)
     *
     * @this {Chip}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, Chip.VERSION, config);

        /*
         * Get access to the LED device, so we can update its display.
         */
        this.ledArray = /** @type {LED} */ (this.findDeviceByClass(Machine.CLASS.LED));
        if (this.ledArray) {

            /*
             * clearBuffer(true) performs a combination of clearBuffer() and drawBuffer().
             */
            this.ledArray.clearBuffer(true);

            let configInput = {
                class:          "Input",
                location:       [0, 0, this.ledArray.widthView, this.ledArray.heightView, this.ledArray.cols, this.ledArray.rows],
                drag:           true,
                bindings:       {surface: this.ledArray.config.bindings[LED.BINDING.CONTAINER]}
            };

            let led = this.ledArray;
            this.ledInput = new Input(idMachine, idDevice + "Input", configInput);
            this.ledInput.addInput(function onLEDInput(col, row) {
                if (col >= 0 && row >= 0) {
                    led.setBuffer(col, row, LED.STATE.ON - led.getBufferData(col, row));
                    led.drawBuffer();
                }
            });

            /*
             * Get access to the Input device, so we can add our click functions.
             */
            this.input = /** @type {Input} */ (this.findDeviceByClass(Machine.CLASS.INPUT));
            this.input.addClick(this.onPower.bind(this), this.onReset.bind(this));

            /*
             * Get access to the Time device, so we can give it our clocker() function.
             */
            this.time = /** @type {Time} */ (this.findDeviceByClass(Machine.CLASS.TIME));
            if (this.time) {
                this.time.addClocker(this.clocker.bind(this));
            }
        }
    }

    /**
     * clocker(nCyclesTarget)
     *
     * @this {Chip}
     * @param {number} nCyclesTarget (0 to single-step, -1 to display status only)
     * @returns {number} (number of cycles actually "clocked")
     */
    clocker(nCyclesTarget = 0)
    {
        let nCyclesClocked = 0;
        if (nCyclesTarget >= 0) {
            do {
                this.doGeneration();
                nCyclesClocked += 1;
            } while (nCyclesClocked < nCyclesTarget);
        }
        return nCyclesClocked;
    }

    /**
     * doGeneration()
     *
     * @this {Chip}
     */
    doGeneration()
    {
        let buffer = this.ledArray.getBuffer();
        let bufferClone = this.ledArray.getBufferClone();
        let nCols = this.ledArray.cols;
        let nRows = this.ledArray.rows;
        let nCellsPerRow = nCols * 2, nCells = nRows * nCellsPerRow;

        let iCell = 0;
        let iNO = iCell - nCellsPerRow;
        let iNW = iNO - 2;
        let iNE = iNO + 2;
        let iWE = iCell - 2;
        let iEA = iCell + 2;
        let iSO = iCell + nCellsPerRow;
        let iSW = iSO - 2;
        let iSE = iSO + 2;

        for (let row = 0; row < nRows; row++) {
            if (!row) {
                iNW += nCells;
                iNO += nCells;
                iNE += nCells;
            } else if (row == 1) {
                iNW -= nCells;
                iNO -= nCells;
                iNE -= nCells;
            } else if (row == nRows - 1) {
                iSW -= nCells;
                iSO -= nCells;
                iSE -= nCells;
            }
            for (let col = 0; col <= nCols; col++) {
                if (!col) {
                    iNW += nCellsPerRow;
                    iWE += nCellsPerRow;
                    iSW += nCellsPerRow;
                } else if (col == 1) {
                    iNW -= nCellsPerRow;
                    iWE -= nCellsPerRow;
                    iSW -= nCellsPerRow;
                } else if (col == nCols - 1) {
                    iNE -= nCellsPerRow;
                    iEA -= nCellsPerRow;
                    iSE -= nCellsPerRow;
                } else if (col == nCols) {
                    iNE += nCellsPerRow;
                    iEA += nCellsPerRow;
                    iSE += nCellsPerRow;
                    break;
                }
                let state = buffer[iCell];
                let nNeighbors = buffer[iNW]+buffer[iNO]+buffer[iNE]+buffer[iEA]+buffer[iSE]+buffer[iSO]+buffer[iSW]+buffer[iWE];
                this.assert(!isNaN(nNeighbors));
                if (nNeighbors == 3) {
                    state = LED.STATE.ON;
                } else if (nNeighbors != 2) {
                    state = LED.STATE.OFF;
                }
                if (bufferClone[iCell] !== state) {
                    bufferClone[iCell] = state;
                    bufferClone[iCell + 1] = LED.STATE.DIRTY;
                }
                iCell += 2; iNW += 2; iNO += 2; iNE += 2; iEA += 2; iSE += 2; iSO += 2; iSW += 2; iWE += 2;
            }
        }
        this.ledArray.swapBufferClone();
    }

    /**
     * onPower(fOn)
     *
     * Automatically called by the Machine device after all other devices have been powered up (eg, after
     * a page load event), as well as when all devices are being powered down (eg, before a page unload event).
     *
     * May subsequently be called by the Input device to provide notification of a user-initiated power event
     * (eg, toggling a power button); in this case, fOn should NOT be set, so that no state is loaded or saved.
     *
     * @this {Chip}
     * @param {boolean} [fOn] (true to power on, false to power off; otherwise, toggle it)
     */
    onPower(fOn)
    {
        if (fOn) {
            this.time.start();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Input device to provide notification of a reset event.
     *
     * @this {Chip}
     */
    onReset()
    {
        this.println("reset");
        this.ledArray.clearBuffer(true);
    }
}

Chip.VERSION    = 1.10;

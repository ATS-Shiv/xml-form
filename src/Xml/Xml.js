import React from 'react';
import { GiEarthAsiaOceania } from "react-icons/gi";
import {FiMapPin } from "react-icons/fi";
import {AiOutlineFileSync } from "react-icons/ai";
import {RiFileTransferLine } from "react-icons/ri";
import "./Xml.scss";

const Xml = () => {
    return (
        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>XML Generation</h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <div class="input_field"><label for="html">Territory:</label> <span><FiMapPin/></span>
                            <input type="email" name="email" placeholder="Territory" required />
                        </div>
                        <div class="row clearfix">
                            <div class="col_half">
                                <div class="input_field">
                                <label for="html">From Date:</label>
                                    <input type="date" name="name" placeholder="From Date" />
                                </div>
                            </div>
                            <div class="col_half">
                                <div class="input_field">
                                <label for="html">End Date:</label>
                                    <input type="date" name="name" placeholder="End Date" required />
                                </div>
                            </div>
                        </div>
                        <div class="input_field"><label for="html">Region:</label> <span><GiEarthAsiaOceania/></span>
                            <input type="text" name="password" placeholder="Region" required />
                        </div>
                        <div class="input_field"> <label for="html">Generate XML:</label><span><AiOutlineFileSync/></span>
                            <input type="text" name="generate" placeholder="Generate XML" required />
                        </div>
                        <div class="input_field"><label for="html">Transfer To ZATCA</label><span><RiFileTransferLine/></span>
                            <input type="text" name="generate" placeholder="Transfer To ZATCA" required />
                        </div>
                        <div class="input_field radio_option">
                            <input class="button" type="submit" value="Generate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xml

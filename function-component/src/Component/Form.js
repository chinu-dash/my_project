import React, { useState } from "react";
import Header from "./Header";


function Form() {
    const [detail, setDetail] = useState({
        fname: '',
        lname: '',
        email: '',
        number: '',
    })

    const personalDetail = (e) => {
        setDetail(({ [e.target.name]: e.target.value }))
        console.log(detail)

    }

    return (
        <>
            <Header />
            <button class="btn btn-primary" ><a href="/printName">❮ Previous</a></button>
            <div className="container">
                <form>
                    <h1>Application</h1>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Enter Your Frist Name" name="fname" onChange={personalDetail} value={detail.fname} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Enter Your Last Name" name="lname" onChange={personalDetail} value={detail.lname} />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" placeholder="Enter Your Email Id" name="email" onChange={personalDetail} value={detail.email} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" placeholder="Enter your Contact number" name="number" onChange={personalDetail} value={detail.number} />
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                    <label class="form-check-label" for="gridRadios1">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label class="form-check-label" for="gridRadios2">
                                        Female
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                    <label class="form-check-label" for="gridRadios3">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <div class="col-sm-2">Intresting In</div>

                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    React js
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Javascript
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    CSS
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Bootstrap
                                </label>
                            </div>
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}
export default Form
import React from "react"
import "./css/index.css"
import Inputs from "./Inputs";
import {PostAddPost} from  "./../../redux/actions/actionsAddPost"
import {withRouter} from "react-router";
class ContainerInputs extends React.Component {
    state = {
        form: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            city: "",
            password: "",
            title:"",
            body:"",

        },
        formValidate: {
            first_name: "ok",
            last_name: "ok",
            email: "ok",
            phone: "ok",
            city: "ok",
            password: "ok",
            title:"suspense",
            body:"suspense",
        },
        globalverification: true,
        onBlur: "first_name",
        errorEmail: {
            name: null,
            message: null,
        },
        errorPassword: {
            name: null,
            message: null,
        }
    }

    componentDidMount() {
        this.setState({
            form:{
                title:this.props.title,
                body:this.props.body,


            }
        })
    }

    async componentWillReceiveProps(nextProps) {
        await this.setState({
            errorEmail: {
                name: nextProps.state.errorEmail.name,
                message: nextProps.state.errorEmail.message,
            },
        })
        if (this.state.errorEmail.name === "email") {
            this.setState({
                formValidate: {
                    ...this.state.formValidate,
                    ["email"]: "error"
                }
            });
        }
        if (this.state.errorPassword.name === "password") {
            this.setState({
                formValidate: {
                    ...this.state.formValidate,
                    ["password"]: "error"
                }
            });
        }
        if (this.state.errorEmail.name === null) {
            this.props.history.push('/login')
        }

    }


    handleChange = () => (event) => {
        let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        switch (event.target.id) {
            case 'first_name':
                this.setState({
                    form: {
                        ...this.state.form,
                        [event.target.id]: event.target.value
                    }
                });
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'last_name':
                this.setState({
                    form: {
                        ...this.state.form,
                        last_name: event.target.value
                    }
                })
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'email':
                this.setState({
                    form: {
                        ...this.state.form,
                        email: event.target.value
                    },
                    errorEmail: ""
                })

                if (reEmail.test(event.target.value) === false) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'phone':
                this.setState({
                    form: {
                        ...this.state.form,
                        phone: event.target.value
                    }
                })

                if (rePhone.test(event.target.value) === false) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'city':
                this.setState({
                    form: {
                        ...this.state.form,
                        city: event.target.value
                    }
                })
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'password':
                this.setState({
                    form: {
                        ...this.state.form,
                        password: event.target.value
                    }
                })
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'title':
                this.setState({
                    form: {
                        ...this.state.form,
                        [event.target.id]: event.target.value
                    }
                });
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
            case 'body':
                this.setState({
                    form: {
                        ...this.state.form,
                        [event.target.id]: event.target.value
                    }
                });
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
        }

    }

    async buttonSend() {
        debugger
        let arrArguments = []
        for (var key in this.state.formValidate) {
            arrArguments.push(this.state.formValidate[key])
        }
        if (arrArguments.every((e) => {
            return e === "ok"
        }) === true) {

            PostAddPost(`https://simpleblogapi.herokuapp.com/posts/${this.props.id}`,"PUT", {
                title: this.state.form.title,
                body: this.state.form.body,

            })
            this.props.history.push("/posts");
            this.setState({
                ...this.state,
                globalverification: true
            })


        } else {
            this.setState({
                ...this.state,
                globalverification: false
            })
        }
    }

    renderValue(type, text = "",img="") {
        // const imgRender = (img)=>{
        //     return img.replace(/^"(.*)"$/, '$1')
        // }
        if (this.state.formValidate[type] === "suspense") {
            return (
                <div className="form-block_box">
                    <div className="form-block_box__text">
                        <p>{text}:</p>
                    </div>
                    <div className="form-block_box__input">
                        <div className="form-block_box__input___img">
                            <div className="form-block_box__input___img">
                                <i className="fa fa-text-width" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input
                            autoFocus
                            id={type}
                            name={type}
                            value={this.state.form[type]}
                            onChange={this.handleChange()}
                        />
                    </div>
                </div>
            )
        } else if (this.state.formValidate[type] === "error") {
            return (
                <div className="form-block_box">
                    <div className="form-block_box__text">
                        <p>{text}:</p>
                    </div>
                    <div className="form-block_box__input verificationNo">
                        <div className="form-block_box__input___img">
                            <i className="fa fa-text-width" aria-hidden="true"></i>
                        </div>
                        <input
                            autoFocus
                            className="verificationNo"
                            id={type}
                            name={type}
                            value={this.state.form[type]}
                            onChange={this.handleChange()}
                        />

                        <div className="form-block_box__input___verification">
                            <i className="fa fa-text-width" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>


            )

        } else if (this.state.formValidate[type] === "ok") {

            return (
                <>
                    <div className="form-block_box">
                        <div className="form-block_box__text">
                            <p>{text}:</p>
                        </div>
                        <div className="form-block_box__input verificationOk">
                            <div className="form-block_box__input___img ">
                                <i className="fa fa-text-width" aria-hidden="true"></i>
                            </div>
                            <input
                                autoFocus
                                className={"verificationOk"}
                                id={type}
                                name={type}
                                value={this.state.form[type]}
                                onChange={this.handleChange()}
                            />
                            <div className="form-block_box__input___verification">
                                <i className="fa fa-text-width" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
    }


    render() {

        return (
            <div className="form">
                <form>
                    <Inputs renderValue={this.renderValue.bind(this)} buttonSend={this.buttonSend.bind(this)}/>
                </form>
            </div>
        )
    }
}


export default withRouter(ContainerInputs)




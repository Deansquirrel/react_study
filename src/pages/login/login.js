import React, {Component} from "react";
import PropTypes from 'prop-types';
// import { Form,Icon, Input,Button } from 'antd';
import "./login.css"

class Login extends Component {

    static propTypes = {
        handleLogin:PropTypes.func,
    };

    static defaultProps = {
        handleLoginSuccess:f=>f,
    };

    render() {
        return (
            <div>
                {/*<LoginForm*/}
                {/*    title={"登   录"}*/}
                {/*    disabled={this.state.isLoggingIn}*/}
                {/*    handleLogin={(username,password)=> this.handleLogin(username,password)}*/}
                {/*/>*/}
                {/*<div className={"VersionInfo"} style={{color:'white'}}>*/}
                {/*    <span>0.0.0 Build20190101</span>*/}
                {/*</div>*/}
            </div>
        )
    }
}
//
// class LoginFormR extends React.Component {
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 // console.log('Received values of form: ', values);
//                 this.handleLogin(values["username"],values["password"])
//             }
//         });
//     };
//
//     handleLogin(username,password){
//         this.props.handleLogin(username,password)
//     }
//
//     componentDidMount() {
//         document.getElementById("normal_login_username").focus();
//     }
//
//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <div className={"login-form"}>
//                 <h1>{this.props.title?this.props.title:"Login in"}</h1>
//                 <Form style={{marginTop:'50px'}} onSubmit={this.handleSubmit}>
//                      <Form.Item>
//                          {getFieldDecorator('username', {
//                              rules: [{ required: true, message: 'Please input your username!' }],
//                          })(
//                              <Input size={"large"}
//                                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                  placeholder="Username"
//                              />,
//                          )}
//                      </Form.Item>
//                     <Form.Item>
//                           {getFieldDecorator('password', {
//                             rules: [{ required: true, message: 'Please input your Password!' }],
//                             })(
//                          <Input size={"large"}
//                              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                              type="password"
//                              placeholder="Password"
//                          />,
//                      )}
//                     </Form.Item>
//                     <Form.Item>
//                         <Button
//                             loading={this.props.disabled}
//                             type="primary"
//                             style={{width:'100%',marginTop:'30px'}}
//                             size={"large"}
//                             htmlType="submit"
//                             className="login-form-button">
//                             {!this.props.disabled?"Log in":"Logging in"}
//                         </Button>
//                     </Form.Item>
//
//                 </Form>
//             </div>
//         )
//     }
// }
//
// const LoginForm = Form.create({ name: 'normal_login' })(LoginFormR);
import { userStore } from '@/stores/userStore';
import { Button, Checkbox, Form, Input } from 'antd';
import { useLoading } from 'foca';
import type { FC } from 'react';

interface EmailLoginProps {
  email: string;
  password: string;
  keepLogin: boolean;
}
const LoginForm: FC = () => {
  const [form] = Form.useForm<EmailLoginProps>();
  const loading = useLoading(userStore.emailLogin);

  const onFinish = async (values: EmailLoginProps): Promise<void> => {
    console.log('当前的值:', values);
    const data = await userStore.emailLogin({
      email: values.email,
      password: values.password,
      keepLogin: values.keepLogin,
    });
    if (data) {
      //说明是electron版
      const { sendToMain } = window.electron;
      sendToMain('login-success', data);
      sendToMain('changeLoginWindow', {
        open: false,
      });
    }
  };
  return (
    <div
      className="hero min-h-full bg-base-200"
      //style={{backgroundImage: `url(https://placeimg.com/1000/800/arch)`}}
    >
      {/*<div className="hero-overlay bg-opacity-60"></div>*/}
      <div className="hero-content flex-col xs:flex-row-reverse">
        <div className="text-center xs:text-left">
          <h1 className="text-5xl font-bold text-sky-100">现在登录!</h1>
          <p className="py-6">
            这是一个崭新的，全新的平台，在这里你可以分享一切.
          </p>
          <p>
            还没账号？
            <Button type={'link'} className={'animate-bounce'}>
              去注册
            </Button>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Form
              colon={false}
              form={form}
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                label={'邮箱'}
                name={'email'}
                rules={[
                  { required: true, message: '请输入邮箱' },
                  {
                    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                    message: '请输入正确的邮箱',
                  },
                ]}
              >
                <Input className={'rounded-t-lg'} placeholder={'请输入'} />
              </Form.Item>
              <Form.Item
                label={'密码'}
                name={'password'}
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  className={'rounded-b-lg'}
                  placeholder={'请输入'}
                />
              </Form.Item>
              <Form.Item
                initialValue={true}
                name="keepLogin"
                valuePropName="checked"
              >
                <Checkbox>15天内保持登录</Checkbox>
              </Form.Item>
              <Form.Item dependencies={['email', 'password']}>
                {({ getFieldsValue }) => {
                  const { email, password } = getFieldsValue([
                    'email',
                    'password',
                  ]);
                  let disabled = true;
                  if (email && password) {
                    disabled = false;
                  }
                  return (
                    <div className="mt-2">
                      <Button
                        htmlType={'submit'}
                        disabled={disabled}
                        loading={loading}
                        type={'primary'}
                        className={'rounded-md'}
                        block={true}
                      >
                        登录
                      </Button>
                    </div>
                  );
                }}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

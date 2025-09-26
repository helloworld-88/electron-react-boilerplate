import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Space,
  message,
  Card,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  CopyOutlined,
  GlobalOutlined,
  SunOutlined,
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
  DesktopOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import './LoginPageAntd.css';

const { Title, Text, Paragraph } = Typography;

interface LoginFormData {
  deviceId: string;
  inviteCode: string;
  rememberLogin: boolean;
}

function LoginPageAntd() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCopyDeviceId = () => {
    const deviceId = form.getFieldValue('deviceId');
    navigator.clipboard.writeText(deviceId);
    message.success('设备标识已复制到剪贴板');
  };

  const handleLogin = async (values: LoginFormData) => {
    setLoading(true);
    try {
      // 模拟登录请求
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });
      message.success('登录成功！');
      // eslint-disable-next-line no-console
      console.log('登录数据:', values);
    } catch {
      message.error('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="app">
      {/* 自定义标题栏 */}
      <div className="header">
        <div className="left" />
        <div className="center">
          <span className="el-text">HelloWorld跨境助手</span>
        </div>
        <div className="right">
          <Button className="header-button-minus" type="text" icon={<MinusOutlined />} size="small" />
          <Button className="header-button-border" type="text" icon={<BorderOutlined />} size="small" />
          <Button className="header-button-close" type="text" icon={<CloseOutlined />} size="small" />
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="login-content-antd">
        {/* 左侧面板 */}
        <div className="left-panel-antd">
        </div>

        {/* 右侧面板 */}
        <div className="right-panel-antd">
          <div className="login-form-antd">
            <div className="form-header-antd">
              <Space>
                <Button
                  type="text"
                  icon={<GlobalOutlined />}
                  size="small"
                  className="theme-btn-antd"
                />
                <Text type="secondary">中</Text>
                <Button
                  type="text"
                  icon={<SunOutlined />}
                  size="small"
                  className="theme-btn-antd"
                />
              </Space>
            </div>

            <div className="form-content-antd">
              <Title level={3} className="welcome-title-antd">
                欢迎登录
              </Title>
              <Paragraph className="welcome-subtitle-antd">
                使用HelloWorld跨境助手，助力全球业务增长
              </Paragraph>

              <Form
                form={form}
                name="login"
                onFinish={handleLogin}
                initialValues={{
                  deviceId: 'dba23ac3-2a3f-42fd-8940-58c6db38efc4',
                  inviteCode: 'w0ndFe31n7iaF7woRIKN1Oll0g4wntdh',
                  rememberLogin: true,
                }}
                size="middle"
                layout="vertical"
              >
                <Form.Item
                  name="deviceId"
                  label="设备标识"
                  rules={[{ required: true, message: '请输入设备标识' }]}
                >
                  <Input
                    size="large"
                    prefix={<DesktopOutlined />}
                    suffix={
                      <Button
                        type="text"
                        icon={<CopyOutlined />}
                        onClick={handleCopyDeviceId}
                        size="small"
                      />
                    }
                    style={{ fontSize: '14px' }}
                  />
                </Form.Item>

                <Form.Item
                  name="inviteCode"
                  label="邀请码"
                  rules={[{ required: true, message: '请输入邀请码' }]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    placeholder="请输入邀请码"
                    style={{ fontSize: '14px' }}
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="rememberLogin"
                  valuePropName="checked"
                  style={{ textAlign: 'left' }}
                >
                  <Checkbox>记住登录状态</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading ? { icon: <SyncOutlined spin /> } : false}
                    block
                    className="login-btn-antd"
                  >
                    登录
                  </Button>
                </Form.Item>

                <div className="login-actions-antd">
                  <Button
                    type="link"
                    className="forgot-password-btn-antd"
                    onClick={() => message.info('忘记密码功能开发中...')}
                  >
                    忘记密码
                  </Button>
                  <Button
                    type="link"
                    className="register-btn-antd"
                    onClick={() => message.info('注册账号功能开发中...')}
                  >
                    注册账号
                  </Button>
                </div>
              </Form>

              <div className="copyright-antd">
                ©2024-2025 HelloWorld跨境助手
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageAntd;

import mockjs from 'mockjs';
import { defineMock } from 'umi';
export default defineMock({
  'POST /api/user/queryUser': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      code: 0,
      msg: '获取成功',
      data: mockjs.mock({
        id: '@id()', //随机id
        username: '@cname()', //随机中文名字
        createDate: '@date()', //随机生成日期
        updateDate: '@date()', //随机生成日期
        avatar: "@image('')", //图像
        'accountType|0-2': 0, //0-用户名-密码 1-邮箱-密码 2-微信 3-github
        //description:"@paragraph()",//描述
        ip: '@ip()', //ip
        email: '@email()', //email
        //'value|1-100': 50,
        'sex|0-1': 1,
      }),
    });
  },
});

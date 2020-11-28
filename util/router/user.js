
  /**
   * @swagger
   * definitions:
   *   Login:
   *     required:
   *       - username
   *       - password
   *     properties:
   *       username:
   *         type: string
   *       password:
   *         type: string
   *       path:
   *         type: string
   */


  //  tags 可以理解成借口分类  parameters 参数
  /**
   * @swagger
   * /login:
   *   post:
   *     description: 用户登入
   *     tags: [用户登入模块]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: password
   *         description: 用户密码.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: username
   *         description: 用户名.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: 登入成功
   *         schema:
   *           type: object
   *           $ref: '#/definitions/Login'
   *  
   */
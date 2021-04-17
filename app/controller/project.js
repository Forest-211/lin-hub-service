const Controller = require('egg').Controller

class ProjectController extends Controller {
    // 获取项目/组件的代码模板
    async getTemplate() {
        const { ctx } = this
        ctx.body = {
            code: 0,
            data: 'getTemplate',
        }
    }
}

module.exports = ProjectController

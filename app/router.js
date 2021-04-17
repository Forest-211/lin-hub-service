'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app
    const { project } = controller
    router.get('/project', project.getTemplate)
}

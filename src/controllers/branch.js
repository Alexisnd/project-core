const Controller = require('../decorators/controller')
const BranchService = require('../services/branch_service')

class BranchController {
  constructor () {
    this.service = new BranchService()
  }
  async getByBrand (req) {
    const BrandId = req.params.BrandId
    const branches = await this.service.getByBrand(BrandId)
    return [branches, 'branches:']
  }
  async create (req) {
    const data = req.body
    const branch = await this.service.create(data)
    return [branch, 'The new branch was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const branch = await this.service.update(id, data)
    return [branch, 'Update branch was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const branch = await this.service.delete(id)
    return [branch, 'Delete branch was succesfull']
  }
}

const branchController = new BranchController()
const controller = new Controller(branchController)

module.exports = controller

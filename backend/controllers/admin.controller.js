const db = require('../model')
const Menu = db.menus


exports.createMenu = async (req, res) => {
    try {
        let { menu_name, url, sequence, role, isActive, id } = req.body;
        if (req.body) {
            let menu = { menu_name, url, sequence, role, isActive }
            if (id) {
                menu['id'] = id
                let updated = await Menu.update(menu, {
                    where: { id: id }
                })
                if (updated) {
                    res.json({
                        status: 200,
                        message: 'Menu Successfully Updated',
                    })
                }
                else throw new Error('Something went Wrong while creating menu')
            }
            else {
                let createdMenu = await Menu.create(menu)
                if (createdMenu) {
                    res.json({
                        status: 200,
                        message: 'Menu Successfully created',
                    })
                }
                else throw new Error('Something went Wrong while creating menu')
            }

        }
        else {
            throw new Error('missing data')
        }

    } catch (error) {
        res.json({
            status: 403,
            error: error.message
        })
    }
}

exports.getAllMenus = async (req, res) => {
    try {
        let allData = await Menu.findAll({ raw: true })
        if (allData) {
            res.json({
                status: 200,
                message: 'Menu fetched Successfully',
                data: allData
            })
        }
        else throw new Error('Something went Wrong while fetching menu');
    } catch (error) {
        res.json({
            status: 403,
            error: error.message
        })
    }
}

exports.editStatus = async (req, res) => {
    try {
        let { tab_button, id } = req.body
        if (id) {
            console.log(tab_button, '0-');
            console.log(tab_button, '1--');

            let updated

            if (tab_button == 1) {
                updated = await Menu.update({ isActive: 0 }, {
                    where: { id: id }
                })
            }
            else {
                updated = await Menu.update({ isActive: 1 }, {
                    where: { id: id }
                })
            }

            if (updated) {
                res.json({
                    status: 200,
                    message: 'Menu Updated Successfully',
                    data: updated
                })
            }
            else throw new Error('Something went Wrong while fetching menu');

        }
        else throw new Error('Data missing');
    } catch (error) {
        res.json({
            status: 403,
            error: error.message
        })
    }
}
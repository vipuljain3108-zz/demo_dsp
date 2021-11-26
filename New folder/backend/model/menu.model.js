
module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menu', {
        menu_name : {
            type : Sequelize.STRING
        },
        url: {
            type : Sequelize.STRING
        },
        sequence: {
            type : Sequelize.STRING
        },
        role: {
            type : Sequelize.STRING
        },
        isActive : {
            type : Sequelize.INTEGER
        },
    })

    return Menu;
}
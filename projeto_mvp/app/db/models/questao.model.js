const {DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model", ""), '.js')
const sequelize = require('../index').getConnection();

const Questao = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        createdAt: {
            typ: DataTypes.DATE,
            field: 'criado_em'
        },
        updatedAt: {
            typ: DataTypes.DATE,
            field: 'atualizado_em'
        }
    }, 
    {
        sequelize, 
        tableName:name
    }
)

Questao.associate = models => {
    Questao.belongsTo(models.usuario,{
        foreingKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })
}

module.exports = Questao
const {DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model", ""), '.js')
const sequelize = require('../index').getConnection();

const HardSkill = sequelize.define(name, 
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

HardSkill.associate = models => {
    HardSkill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreingKey: {
            name: 'id_hardskill'
        },
        as: 'alunos'
    })
}

module.exports = HardSkill
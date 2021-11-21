const {DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model", ""), '.js')
const sequelize = require('../index').getConnection();

const Aluno = sequelize.define(name, 
    {
        matricula: {
            type: DataTypes.STRING(10)
        }
    }, 
    {
        sequelize, tableName:name, timestamps:false
    }
)

Aluno.associate = (models) => {

    Aluno.belongsTo(models.usuario,{
        foreingKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreingKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })

}

module.exports = Aluno
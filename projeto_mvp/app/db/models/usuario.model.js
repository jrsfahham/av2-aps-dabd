const {DataTypes} = require('sequelize');
const models = require('.');
const name = require('path').basename(__filename.replace(".model", ""), '.js');
const sequelize = require('../index').getConnection();

const Usuario = sequelize.afterDefine(name, {
    nome_completo : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    createdAt: {
        typ: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        typ: DataTypes.DATE,
        field: 'atualizado_em'
    }
},{
    sequelize,
    tableName: name,
})

Usuario.associate = (models) => {
    Usuario.hasOne(models.aluno,{
        foreingKey: {
            name: 'id_usuario'
        },
        as: 'aluno'
    })

    Usuario.hasMany(models.questao,{
        foreingKey: {
            name: 'id_usuario'
        },
        as: 'questoes'
    })
}

module.exports = Usuario
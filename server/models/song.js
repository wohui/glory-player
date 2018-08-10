/**
 * 歌曲数据模型
 */
const song = (sequelize, DataTypes) => {
    return sequelize.define("song", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            song_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            song_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            singer: {
                allowNull: true,
                type: DataTypes.STRING
            },
            pic_url:{
                allowNull:true,
                type:DataTypes.STRING
            },
            is_glory: {
                allowNull: false,
                type: DataTypes.INTEGER(1)
            },

        },
        {
            createdAt: 'create_time',
            updatedAt: 'update_time',
            tableName: 't_song',
            freezeTableName: true
        }
    );
};
module.exports = song;

import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType, AllowNull, Default, Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'colors',
  timestamps: false,
})
export class Color extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  id: number;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  name: string;
}

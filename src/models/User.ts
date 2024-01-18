import {
  AllowNull,
  AutoIncrement, Column,
  Model,
  PrimaryKey,
  Table,
  DataType, ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Color } from './Color';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
    field: 'car_color_id',
  })
  carColorId: number;

  @BelongsTo(() => Color)
  color?: Color;
}

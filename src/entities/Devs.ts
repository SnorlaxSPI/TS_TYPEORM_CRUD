import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('devs')
class Devs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string

  @Column({ type: 'text' })
  developer!: string
}

export { Devs };
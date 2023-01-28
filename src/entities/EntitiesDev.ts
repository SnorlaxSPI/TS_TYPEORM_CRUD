import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('devs')
class EntitiesDev {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string

  @Column({ type: 'text' })
  developer!: string
}

export { EntitiesDev };
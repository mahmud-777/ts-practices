import { 
  Entity, PrimaryGeneratedColumn, Column, 
  CreateDateColumn, UpdateDateColumn, 
  VersionColumn, 
} from "typeorm";

@Entity()

export class Person{
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
  })
  id!: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  isDeleted!: boolean;

  @CreateDateColumn()
  createdAt!: Date | null;

  @UpdateDateColumn()
  updatedAt!: Date

  @VersionColumn({
    default: 1,
  })
  version!: number;

  // This is a simple constructor to create a Person Object
  constructor(name: string, email: string, phone: string, dateOfBirth: Date){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.isDeleted = false;
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  firstname: string;

  @Column({
    nullable: false
  })
  lastname: string;

  @Column({
    nullable: false
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  constructor(firstname: string, lastname: string, email: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}

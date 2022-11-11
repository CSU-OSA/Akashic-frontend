import type { IUser } from "@/domain/user.interface";
import { faker } from "@faker-js/faker";

export async function getUserProfile(
  code: string,
  state: string
): Promise<IUser> {
  return {
    nickName: faker.name.fullName(),
    id: faker.random.words(),
    avatar: faker.image.avatar(),
  };
}

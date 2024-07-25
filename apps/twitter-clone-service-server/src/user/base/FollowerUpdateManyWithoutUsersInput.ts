/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FollowerWhereUniqueInput } from "../../follower/base/FollowerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FollowerUpdateManyWithoutUsersInput {
  @Field(() => [FollowerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowerWhereUniqueInput],
  })
  connect?: Array<FollowerWhereUniqueInput>;

  @Field(() => [FollowerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowerWhereUniqueInput],
  })
  disconnect?: Array<FollowerWhereUniqueInput>;

  @Field(() => [FollowerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowerWhereUniqueInput],
  })
  set?: Array<FollowerWhereUniqueInput>;
}

export { FollowerUpdateManyWithoutUsersInput as FollowerUpdateManyWithoutUsersInput };

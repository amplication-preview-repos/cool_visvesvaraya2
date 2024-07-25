/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TweetService } from "../tweet.service";
import { TweetCreateInput } from "./TweetCreateInput";
import { Tweet } from "./Tweet";
import { TweetFindManyArgs } from "./TweetFindManyArgs";
import { TweetWhereUniqueInput } from "./TweetWhereUniqueInput";
import { TweetUpdateInput } from "./TweetUpdateInput";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";

export class TweetControllerBase {
  constructor(protected readonly service: TweetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tweet })
  async createTweet(@common.Body() data: TweetCreateInput): Promise<Tweet> {
    return await this.service.createTweet({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tweet] })
  @ApiNestedQuery(TweetFindManyArgs)
  async tweets(@common.Req() request: Request): Promise<Tweet[]> {
    const args = plainToClass(TweetFindManyArgs, request.query);
    return this.service.tweets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    const result = await this.service.tweet({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTweet(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() data: TweetUpdateInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.updateTweet({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.deleteTweet({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/likes")
  @ApiNestedQuery(LikeFindManyArgs)
  async findLikes(
    @common.Req() request: Request,
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Like[]> {
    const query = plainToClass(LikeFindManyArgs, request.query);
    const results = await this.service.findLikes(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        tweet: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likes")
  async connectLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        connect: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likes")
  async updateLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        set: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likes")
  async disconnectLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        disconnect: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }
}

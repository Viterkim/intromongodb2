import * as mongoose from 'mongoose';
import { TweetSchema } from '../models/tweetModel';
import { Request, Response } from 'express';

const Tweet = mongoose.model('Tweet', TweetSchema);

export class TweetController {

  public getAmountUsers(req: Request, res: Response) {
    Tweet.distinct('user').countDocuments().exec((err, count) => {
      if (err) {
        res.send(err);
      }
      res.json(count);
    });
  }

  public getUserLinksMost(req: Request, res: Response) {
    // Count @ in total tweets, top 10
    Tweet.aggregate(
      [
        { $match: { text: /@\w*/ } },
        { $unwind: "$user" },
        { $group: { _id: "$user", number: { $sum: 1 } } },
        { $sort: { number: -1 } },
        { $limit: 10 }
      ]
    ).allowDiskUse(true).exec((err, tweets) => {
      if (err) {
        res.send(err);
      }
      res.json(tweets);
    });
  }

  public getTopMostMentioned(req: Request, res: Response) {
    // Count @username in all tweets, top 5
    res.send("not done");
  }

  public getTopMostActive(req: Request, res: Response) {
    // Count tweets per user, top 10
    Tweet.aggregate(
      [
        { $unwind: "$user" },
        { $group: { _id: "$user", number: { $sum: 1 } } },
        { $sort: { number: -1 } },
        { $limit: 10 }
      ]
    ).allowDiskUse(true).exec((err, tweets) => {
      if (err) {
        res.send(err);
      }
      res.json(tweets);
    });
  }

  public getTopMostGrumpy(req: Request, res: Response) {
    // Count total polarity score of every tweet a user has done, top 5 most positive, and 5 most negative
    res.send("not done");
  }

  public addNewTweet(req: Request, res: Response) {
    let newTweet = new Tweet(req.body);
    newTweet.save((err, tweet) => {
      if (err) {
        res.send(err);
      }
      res.json(tweet);
    });
  }

  public getAllTweets(req: Request, res: Response) {
    Tweet.find({}, (err, tweet) => {
      if (err) {
        res.send(err);
      }
      res.json(tweet);
    });
  }

  public getTweetById(req: Request, res: Response) {
    Tweet.find({
      id: req.params.id
    }, (err, tweet) => {
      if (err) {
        res.send(err);
      }
      res.json(tweet);
    });
  }
}

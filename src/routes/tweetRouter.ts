import { Request, Response, Router } from 'express'
import { TweetController } from "../controllers/tweetController";

const tweetController: TweetController = new TweetController();
const router: Router = Router();

router.get('/amountUsers', (req: Request, res: Response) => {
  tweetController.getAmountUsers(req, res);
});

router.get('/userLinksMost', (req: Request, res: Response) => {
  tweetController.getUserLinksMost(req, res);
});

router.get('/topMostMentioned', (req: Request, res: Response) => {
  tweetController.getTopMostMentioned(req, res);
});

router.get('/topMostActive', (req: Request, res: Response) => {
  tweetController.getTopMostActive(req, res);
});

router.get('/topMostGrumpy', (req: Request, res: Response) => {
  tweetController.getTopMostGrumpy(req, res);
});

router.get('/', (req: Request, res: Response) => {
  res.send('visit /amountUsers, /userLinksMost, /topMostMentioned, /topMostActive or /topMostGrumpy');
});

router.post('/all', (req: Request, res: Response) => {
  tweetController.getAllTweets(req, res);
});

router.get('/id/:id', (req: Request, res: Response) => {
  tweetController.getTweetById(req, res);
});

export const tweetRouter: Router = router; 

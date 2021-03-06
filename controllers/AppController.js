import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  /**
   * GET /status
   * Should return the Redis and DB statuses.
   */
  static getStatus(request, response) {
    response.statusCode = 200;
    return response.send({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  }

  /**
   * GET /stats
   * Should return the number of users and files in DB.
   */
  static async getStats(request, response) {
    response.statusCode = 200;
    response.send({
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    });
  }
}

export default AppController;

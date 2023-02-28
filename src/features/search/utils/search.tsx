import {Position, User} from '../types';

/**
 * This function will help to compute the distance between two points.
 * The distance is computed using the haversine formula.
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 * we use the following explanation from stackoverflow
 * @see https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
 * @param source
 * @param target
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const computeDistance = (source: Position, target: Position) => {
  // Approximate radius of the earth in km
  const EARTH_RADIUS = 6371;
  // Convert sources position to radians
  const sourceLat = (source.latitude * Math.PI) / 180;
  const sourceLon = (source.longitude * Math.PI) / 180;
  // Convert target position to radians
  const targetLat = (target.latitude * Math.PI) / 180;
  const targetLon = (target.longitude * Math.PI) / 180;

  // Calculate the distance between the two users using the haversine formula
  const latDiff = targetLat - sourceLat;
  const lonDiff = targetLon - sourceLon;
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(sourceLat) * Math.cos(sourceLat) * Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
};

/**
 * This function takes the user's location and interests and returns the users near by based on the user's location and interests
 * @param user - represents the current user, the one who is logged in
 * @param users - represents the list of users
 */
export const findUsersNearby = async (user: User, users: User[]) => {
  return (
    users
      // Filter out the current user
      .filter(otherUser => user.id !== otherUser.id)
      // Filter out users that are too far away
      // Because the Map is not working yet we will comment this out
      //   .filter((otherUser) => {
      //     const distance = computeDistance(user.position, otherUser.position);
      //     return distance <= MAX_DISTANCE;
      //   })
      // Filter out users that have at least one common interests
      .filter(otherUser => {
        const commonInterests = user.interests.filter(interest =>
          otherUser.interests.includes(interest),
        );
        return commonInterests.length > 0;
      })
  );
};

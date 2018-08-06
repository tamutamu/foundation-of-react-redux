import geolib from 'geolib';

import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1043063542712502342';

const DUMMY_IMG = 'https://stamp-mato.me/wp-content/uploads/2016/10/okaimono-panda_c.jpg';

export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(result =>
      result.data.hotels.map((hotel) => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const thumbUrl = basicInfo.hotelThumbnailUrl;
        const distance = geolib.getDistance(
          { latitude: location.lat, longitude: location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: thumbUrl ? thumbUrl : DUMMY_IMG,
          price: basicInfo.hotelMinCharge,
          reviewCount: basicInfo.reviewCount,
          distance,
        };
      }),
    );
};

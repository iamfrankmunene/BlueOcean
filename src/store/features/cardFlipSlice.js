import { createSlice } from "@reduxjs/toolkit"

const restaurants = [
    { name: "Sandy Sips", description: "Indulge in a tropical paradise at Sandy Sips, where refreshing drinks meet a laid-back atmosphere right by the beach. Let the soothing sounds of waves accompany your dining experience as you unwind in a coastal haven.", contacts:"2543300873", showBack:false },
    { name: "Safari Bites", description: "Embark on a culinary journey at Safari Bites, where the rich flavors and cultural diversity of African cuisine come to life. Immerse yourself in the vibrant spices and traditional dishes that tell a story of the continent's culinary heritage.", contacts:"9908322147", showBack:false },
    { name: "Frosty Delights", description: "Chill out with Frosty Delights, a haven for cold snacks perfect for hot days. From gourmet ice creams to frosty treats, this spot is a cool retreat for those seeking a delightful escape from the heat.", contacts:"1099769231", showBack:false },
    { name: "Kid Kingdom", description: "Step into the Kid Kingdom, a family-friendly restaurant designed for young adventurers. With fun activities for kids and a menu crafted to delight young palates, it's the perfect place for families to create lasting memories together.", contacts:"3466890234", showBack:false },
    { name: "Aqua Eats", description: "Dine on water at Aqua Eats, a unique culinary experience set on a floating restaurant. Enjoy the gentle sway of the waves beneath you as you savor delicious dishes in a setting that combines elegance with the tranquility of the sea.",contacts:"29877021553", showBack:false },
    { name: "Savory Hearts", description: "Romance your taste buds at Savory Hearts, where delicious meals unfold in a romantic setting. Whether it's an intimate dinner for two or a celebration of love, this restaurant promises a culinary experience as enchanting as the setting.", contacts:"5577729019", showBack:false }
  ]

  const experiences = [
    { name: "Massage Paradise", description: "Relax and rejuvenate at Massage Paradise, where skilled therapists offer a range of soothing massages to pamper your body and soul. Escape into a world of tranquility and leave your worries behind.", contacts: '2390812309' },
    { name: "Aquatic Thrills", description: "Embark on thrilling water adventures with Aquatic Thrills. From jet skiing to paddleboarding, experience the excitement of various water sports activities that cater to both beginners and seasoned enthusiasts.", contacts: '3761883618' },
    { name: "Deep Blue Discovery", description: "Dive into the depths of the ocean with Deep Blue Discovery. Our professional guides will take you on an unforgettable deep-sea diving experience, allowing you to explore vibrant marine life and stunning underwater landscapes.", contacts: '2332887865' },
    { name: "Yacht Escapade", description: "Sail away on a luxurious Yacht Escapade, where opulence meets the open sea. Enjoy a private yachting experience with breathtaking views, personalized service, and the freedom to chart your course.", contacts: '39981654178' },
    { name: "Shimba Hills Safari", description: "Embark on a safari adventure to Shimba Hills, where the untamed beauty of nature unfolds before your eyes. Witness diverse wildlife, breathtaking landscapes, and experience the thrill of an authentic African safari.", contacts: '1376542789' },
    { name: "Crystal Oasis", description: "Take a refreshing dip in the Crystal Oasis Pool, surrounded by lush greenery and a tranquil atmosphere. Whether you're swimming for fitness or relaxation, our pool offers the perfect retreat.", contacts: '239367819976' },
    { name: "Community Connections", description: "Immerse yourself in the local culture with Community Connections. Join guided visits to nearby communities, interact with locals, and gain a deeper understanding of the rich traditions and heritage of the region.", contacts: '452678332' },
    { name: "Zen Gym", description: "Revitalize your body and mind at the Zen Gym. Our state-of-the-art facility offers fitness enthusiasts a range of equipment and expert instructors to guide you through invigorating workouts.", contacts: '4482114498' },
    { name: "Beach Bliss", description: "Engage in friendly competition with Beach Bliss. Gather your friends and enjoy beach volleyball, a perfect blend of sun, sand, and exciting games that will add a touch of joy to your seaside retreat.", contacts: '0987224689' },
  ]

  const cardFlipSlice = createSlice({
    name: "cardFlip",
    initialState: {
      restaurants: restaurants,
      experiences: experiences,
    },
    reducers: {
        toggleDescription: (state, action) => {
          const { cardIndex } = action.payload
          const restaurant = state.restaurants.find((r) => r.index === cardIndex)
          const experience = state.experiences.find((e) => e.index === cardIndex)
    
          if (restaurant) {
            restaurant.showBack = !restaurant.showBack
          } else if (experience) {
            experience.showBack = !experience.showBack
          }
        },
      },
  })
  
  export const { toggleDescription } = cardFlipSlice.actions
  export const selectRestaurantsFlip = (state) => state.cardFlip.restaurants
  export const selectExperiencesFlip = (state) => state.cardFlip.experiences
  export default cardFlipSlice.reducer
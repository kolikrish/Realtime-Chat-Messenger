import female_image from './female_image.webp'
import female2_image from './female2_image.webp'
import Alex_turner from './Alex_turner.jpg'
import Jane_smith from './Jane_smith.jpg'
import Linda_green from './Linda_green.jpg'
import Micheal_brown from './Micheal_brown.jpg'
import John_doe from './John_doe.jpg'
import background_image from './background_image.png'
import chat_logo from './chat_logo.png'
import Avtar_image from './Avtar_image.png'
import send_logo2 from './send_logo2.png'


export const assets = {
    female_image,
    female2_image,
    Alex_turner,
    Jane_smith,
    Linda_green,
    Micheal_brown,
    John_doe,
    background_image,
    chat_logo,
    Avtar_image,
    send_logo2,
}


export const ImagesDummyData = [];


export const userDummyData = [
  {
    "_id": "1a2b3c4d5e",
    "email": "john.doe@example.com",
    "fullname": "John Doe",
    "profilePic": './src/assets/John_doe.jpg',
    "bio": "Full-stack developer with a passion for open-source contributions."
  },
  {
    "_id": "2b3c4d5e6f",
    "email": "jane.smith@example.com",
    "fullname": "Jane Smith",
    "profilePic": "./src/assets/Jane_smith.jpg",
    "bio": "UX/UI designer who loves creating intuitive digital experiences."
  },
  {
    "_id": "3c4d5e6f7g",
    "email": "michael.brown@example.com",
    "fullname": "Michael Brown",
    "profilePic": "./src/assets/Micheal_brown.jpg",
    "bio": "DevOps engineer focusing on cloud automation and CI/CD pipelines."
  },
  {
    "_id": "4d5e6f7g8h",
    "email": "linda.green@example.com",
    "fullname": "Linda Green",
    "profilePic": "./src/assets/Linda_green.jpg",
    "bio": "Data analyst passionate about turning data into actionable insights."
  },
  {
    "_id": "5e6f7g8h9i",
    "email": "alex.turner@example.com",
    "fullname": "Alex Turner",
    "profilePic": "./src/assets/Alex_turner.jpg",
    "bio": "AI researcher exploring machine learning and natural language processing."
  }
]


export const messageDummyData = [
  {
    "_id": "msg1a2b3c",
    "senderId": "user123",
    "receiverId": "user456",
    "text": "Hey! How are you?",
    "seen": true,
    // 'image': './src/assets/Alex_turner.jpg',
    "createdAt": "2025-06-17T10:15:30Z"
  },
  {
    "_id": "msg2b3c4d",
    "senderId": "user456",
    "receiverId": "user123",
    "text": "I'm good, thanks! You?",
    "seen": true,
    // 'image': './src/assets/Alex_turner.jpg',
    "createdAt": "2025-06-17T10:16:05Z"
  },
  {
    "_id": "msg3c4d5e",
    "senderId": "user789",
    "receiverId": "user123",
    "text": "Are we still meeting today?",
    "seen": true,
    // 'image': './src/assets/Alex_turner.jpg',
    "createdAt": "2025-06-17T11:00:00Z"
  },
  {
    "_id": "msg4d5e6f",
    "senderId": "user123",
    "receiverId": "user789",
    "text": "Yes, at 4 PM. See you!",
    "seen": true,
    // 'image': './src/assets/Alex_turner.jpg',
    "createdAt": "2025-06-17T11:01:22Z"
  },
  {
    "_id": "msg5e6f7g",
    "senderId": "user456",
    "receiverId": "user789",
    "text": "Let me know if you're joining the call.",
    "seen": true,
    // 'image': './src/assets/Alex_turner.jpg',
    "createdAt": "2025-06-17T11:30:10Z"
  }
]



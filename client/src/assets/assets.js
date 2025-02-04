import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import user_icon from './user_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    user_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
  {
      image: profile_img_1,
      name: 'Donald Jackman',
      role: 'Graphic Designer',
      stars: 5,
      text: `ImagiText has revolutionized my design workflow. As a graphic designer, I can now generate unique visual concepts in seconds, saving hours of manual creation.`
  },
  {
      image: profile_img_2,
      name: 'Richard Nelson',
      role: 'Content Creator',
      stars: 4,
      text: `The AI-powered image generation is mind-blowing! I create social media graphics faster than ever, and each image is uniquely tailored to my brand's style.`
  },
  {
      image: profile_img_3,
      name: 'Ryan Rodriguez',
      role: 'Marketing Specialist',
      stars: 4,
      text: `As a marketing professional, finding the right visuals was always challenging. ImagiText lets me transform my campaign ideas into stunning visuals instantly.`
  }
]

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: [
      'Perfect for beginners',
      '100 credits per month',
      'Generate basic images with simple prompts',
      'Email support with a 48-hour response time',
      'Access to 10+ basic templates',
    ],
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: [
      'Ideal for professionals',
      '500 credits per month',
      'Generate high-quality images with advanced prompts',
      'Priority email support with a 24-hour response time',
      'Access to 50+ premium templates',
      'Custom styles for personalized image generation',
    ],
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: [
      'Tailored for businesses and enterprises',
      '5000 credits per month',
      'Unlimited image generation with no restrictions',
      '24/7 priority support via email and chat',
      'Access to all templates (100+ options)',
      'Custom styles and branding for consistent visuals',
      'Dedicated account manager for personalized assistance',
    ],
  },
];
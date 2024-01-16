import { AuthorData } from '../type/author';

export const authors: AuthorData[] = [
  {
    name: 'Leo Tolstoy',
    bio: 'Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer regarded as one of the greatest and most influential authors of all time. He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/leo-tolstoy.jpg',
    books: [
      { title: 'War and Peace' },
      { title: 'Family Happiness' },
      { title: 'How Much Land Does a Man Need?' },
      { title: 'Childhood' },
    ],
  },
  {
    name: 'Joanne Rowling',
    bio: 'Joanne Rowling, better known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007.',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80',
    books: [
      { title: "Harry Potter and the Philosopher's Stone" },
      { title: 'Harry Potter and the Chamber of Secrets' },
      { title: 'Harry Potter and the Prisoner of Azkaban' },
      { title: 'Harry Potter and the Goblet of Fire' },
      { title: 'Harry Potter and the Order of the Phoenix' },
      { title: 'Harry Potter and the Half-Blood Prince' },
      { title: 'Harry Potter and the Deathly Hallows' },
    ],
  },
  {
    name: 'Jeff Kinney',
    bio: "Jeffrey Patrick Kinney is an American author and cartoonist. He is best known for creating, writing and illustrating the children's book series Diary of a Wimpy Kid. He also created the child-oriented website Poptropica.",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDKs1N-9gNH3TfGe6dOv-9XgRQKiQnZHyL_Qz60InMhn011nZu',
    books: [{ title: 'Diary of a Wimpy Kid' }, { title: 'Diary of a Wimpy Kid: Rodrick Rules' }],
  },
  {
    name: 'William Shakespeare',
    bio: "William Shakespeare was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the Bard of Avon.",
    image: 'https://cdn.britannica.com/10/93010-050-0E665526/Portrait-William-Shakespeare.jpg?w=500&h=500&c=crop',
    books: [{ title: 'Hamlet' }, { title: 'Romeo and Juliet' }, { title: 'The Merchant of Venice' }],
  },
  {
    name: 'George Orwell',
    bio: 'Eric Arthur Blair was an English novelist, essayist, journalist, and critic who wrote under the name George Orwell. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/george-orwell.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
    books: [{ title: 'Animal Farm' }],
  },
  {
    name: 'Ernest Hemingway',
    bio: 'Ernest Miller Hemingway was an American novelist, short-story writer, and journalist. His economical and understated style—which included his iceberg theory—had a strong influence on 20th-century fiction, while his adventurous lifestyle and public image brought him admiration from later generations.',
    image: 'https://www.nobelprize.org/images/hemingway-13096-portrait-mini-2x.jpg',
    books: [{ title: 'The Old Man and the Sea' }],
  },
  {
    name: 'Stephen King',
    bio: 'Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Called the King of Horror, his books have sold more than 350 million copies as of 2006, and many have been adapted into films, television series, miniseries, and comic books.',
    image: 'https://parade.com/.image/t_share/MTk2MjcwODg3MjExNjQwMzQ3/stephen-king-net-worth.jpg',
    books: [{ title: 'The shining' }],
  },
  {
    name: 'Mark Twain',
    bio: 'Samuel Langhorne Clemens, known by the pen name Mark Twain, was an American writer, humorist, essayist, entrepreneur, publisher, and lecturer. He was praised as the greatest humorist the United States has produced, and William Faulkner called him: the father of American literature.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/mark-twain-and-ulysses-s-grant.jpg',
    books: [{ title: 'The Mysterious Stranger' }, { title: 'Life on the Mississippi' }],
  },
  {
    name: 'Nicholas Sparks',
    bio: 'Nicholas Charles Sparks is an American romance novelist, screenwriter, and film producer. He has published twenty-three novels, all New York Times bestsellers, and two works of non-fiction, with over 115 million copies sold worldwide in more than 50 languages.',
    image:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/i5cs6t9nr40b05roq9kggfs6ns.jpg',
    books: [{ title: 'The Best of Me' }, { title: 'Dear John' }, { title: 'A Walk to Remember' }],
  },
  {
    name: 'Nikolai Ostrovsky',
    bio: 'Nikolai Alexeevich Ostrovsky was a Soviet socialist realist writer. He is best known for his novel How the Steel Was Tempered.',
    image:
      'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/f/fb/N_Ostrovskiy.jpg&w=640&q=50',
    books: [{ title: 'How the Steel Was Tempered' }, { title: 'Born of the Storm' }],
  },
];

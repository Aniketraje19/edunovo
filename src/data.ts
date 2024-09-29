// This is Sample data to seed in Database 

export const users = [
    { userId: 'U001', name: 'Aarav Sharma', email: 'aarav.sharma@example.com', phone: '9876543210', address: '123 MG Road, Mumbai, Maharashtra' },
    { userId: 'U002', name: 'Vivaan Patel', email: 'vivaan.patel@example.com', phone: '8765432109', address: '456 Main St, Ahmedabad, Gujarat' },
    { userId: 'U003', name: 'Reyansh Verma', email: 'reyansh.verma@example.com', phone: '7654321098', address: '789 Park Avenue, Bengaluru, Karnataka' },
    { userId: 'U004', name: 'Ayaan Gupta', email: 'ayaan.gupta@example.com', phone: '6543210987', address: '321 Church St, Delhi' },
    { userId: 'U005', name: 'Kiara Singh', email: 'kiara.singh@example.com', phone: '5432109876', address: '654 Brij Marg, Jaipur, Rajasthan' },
    { userId: 'U006', name: 'Ishaan Mehta', email: 'ishaan.mehta@example.com', phone: '4321098765', address: '987 Jubilee Road, Pune, Maharashtra' },
    { userId: 'U007', name: 'Diya Rao', email: 'diya.rao@example.com', phone: '3210987654', address: '159 Central Avenue, Hyderabad, Telangana' },
    { userId: 'U008', name: 'Siddharth Nair', email: 'siddharth.nair@example.com', phone: '2109876543', address: '753 Coastal Road, Chennai, Tamil Nadu' },
    { userId: 'U009', name: 'Anaya Joshi', email: 'anaya.joshi@example.com', phone: '1098765432', address: '852 Hill Top, Kolkata, West Bengal' },
    { userId: 'U010', name: 'Rohan Choudhury', email: 'rohan.choudhury@example.com', phone: '9988776655', address: '456 River Road, Surat, Gujarat' },
  ];


export const books = [
    // Computer Science Books
    { bookId: 'B001', bookName: 'Introduction to Algorithms', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B002', bookName: 'Artificial Intelligence: A Modern Approach', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B003', bookName: 'Design Patterns: Elements of Reusable Object-Oriented Software', category: 'Computer Science', rentPerDay: 3 },
    { bookId: 'B004', bookName: 'The Pragmatic Programmer', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B005', bookName: 'Clean Code: A Handbook of Agile Software Craftsmanship', category: 'Computer Science', rentPerDay: 6 },
    { bookId: 'B006', bookName: 'The Mythical Man-Month: Essays on Software Engineering', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B007', bookName: 'Code Complete: A Practical Handbook of Software Construction', category: 'Computer Science', rentPerDay: 6 },
    { bookId: 'B008', bookName: 'Computer Networking: A Top-Down Approach', category: 'Computer Science', rentPerDay: 3 },
    { bookId: 'B009', bookName: 'Operating System Concepts', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B010', bookName: 'Computer Architecture: A Quantitative Approach', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B011', bookName: 'Artificial Intelligence for Robotics', category: 'Computer Science', rentPerDay: 6 },
    { bookId: 'B012', bookName: 'Introduction to the Theory of Computation', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B013', bookName: 'Database System Concepts', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B014', bookName: 'Computer Vision: Algorithms and Applications', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B015', bookName: 'The Art of Computer Programming', category: 'Computer Science', rentPerDay: 7 },
    { bookId: 'B016', bookName: 'Data Mining: Concepts and Techniques', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B017', bookName: 'Introduction to Machine Learning', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B018', bookName: 'Computer Graphics: Principles and Practice', category: 'Computer Science', rentPerDay: 4 },
    { bookId: 'B019', bookName: 'The C Programming Language', category: 'Computer Science', rentPerDay: 5 },
    { bookId: 'B020', bookName: 'Software Engineering at Google', category: 'Computer Science', rentPerDay: 6 },
  
    // History Books
    { bookId: 'H001', bookName: 'Sapiens: A Brief History of Humankind', category: 'History', rentPerDay: 5 },
    { bookId: 'H002', bookName: 'The History of the Ancient World', category: 'History', rentPerDay: 4 },
    { bookId: 'H003', bookName: 'Guns, Germs, and Steel: The Fates of Human Societies', category: 'History', rentPerDay: 5 },
    { bookId: 'H004', bookName: 'The Silk Roads: A New History of the World', category: 'History', rentPerDay: 6 },
    { bookId: 'H005', bookName: 'The Rise and Fall of the Third Reich', category: 'History', rentPerDay: 7 },
    { bookId: 'H006', bookName: 'A People\'s History of the United States', category: 'History', rentPerDay: 5 },
    { bookId: 'H007', bookName: 'The Diary of a Young Girl', category: 'History', rentPerDay: 4 },
    { bookId: 'H008', bookName: 'The Histories', category: 'History', rentPerDay: 6 },
    { bookId: 'H009', bookName: '1776', category: 'History', rentPerDay: 5 },
    { bookId: 'H010', bookName: 'The Guns of August', category: 'History', rentPerDay: 4 },
  
    // Environmental Books
    { bookId: 'E001', bookName: 'Silent Spring', category: 'Environmental Science', rentPerDay: 5 },
    { bookId: 'E002', bookName: 'The Sixth Extinction: An Unnatural History', category: 'Environmental Science', rentPerDay: 6 },
    { bookId: 'E003', bookName: 'This Changes Everything: Capitalism vs. The Climate', category: 'Environmental Science', rentPerDay: 5 },
    { bookId: 'E004', bookName: 'The Uninhabitable Earth: Life After Warming', category: 'Environmental Science', rentPerDay: 7 },
    { bookId: 'E005', bookName: 'Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge, and the Teachings of Plants', category: 'Environmental Science', rentPerDay: 6 },
    { bookId: 'E006', bookName: 'Our Planet: A Photo Essay', category: 'Environmental Science', rentPerDay: 5 },
    { bookId: 'E007', bookName: 'Half-Earth: Our Planet’s Fight for Life', category: 'Environmental Science', rentPerDay: 6 },
    { bookId: 'E008', bookName: 'The Omnivore’s Dilemma: A Natural History of Four Meals', category: 'Environmental Science', rentPerDay: 5 },
    { bookId: 'E009', bookName: 'Field Notes from a Catastrophe: Man, Nature, and Climate Change', category: 'Environmental Science', rentPerDay: 4 },
    { bookId: 'E010', bookName: 'Collapse: How Societies Choose to Fail or Succeed', category: 'Environmental Science', rentPerDay: 6 },
  ];
  
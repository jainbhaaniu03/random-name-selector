// localStorage keys used to persist app state across page refreshes
const STORAGE_KEYS = {
    NAMES: 'raffleApp_nameMap',
    HISTORY: 'raffleApp_drawHistory'
};

// The original hardcoded raffle ticket list. Used only the very first time the
// app runs in a browser (i.e. when there's nothing saved in localStorage yet).
const DEFAULT_NAME_ENTRIES = [
        ['Arvin & Jaya Shah-1', 1],
        ['Arvin & Jaya Shah-2', 1],
        ['Arvin & Jaya Shah-3', 1],
        ['Arvin & Jaya Shah-4', 1],
        ['Arvin & Jaya Shah-5', 1],
        ['Arvin & Jaya Shah-6', 1],
        ['Arvin & Jaya Shah-7', 1],
        ['Arvin & Jaya Shah-8', 1],
        ['Arvin & Jaya Shah-9', 1],
        ['Arvin & Jaya Shah-10', 1],
        ['Arvin & Jaya Shah-11', 1],
        ['Arvin & Jaya Shah-12', 1],
        ['Arvin & Jaya Shah-13', 1],
        ['Arvin & Jaya Shah-14', 1],
        ['Arvin & Jaya Shah-15', 1],
        ['Arvin & Jaya Shah-16', 1],
        ['Arvin & Jaya Shah-17', 1],
        ['Arvin & Jaya Shah-18', 1],
        ['Arvin & Jaya Shah-19', 1],
        ['Arvin & Jaya Shah-20', 1],
        ['Bipin & Vijaya Shah-1', 1],
        ['Bipin & Vijaya Shah-2', 1],
        ['Bipin & Vijaya Shah-3', 1],
        ['Bipin & Vijaya Shah-4', 1],
        ['Bipin & Vijaya Shah-5', 1],
        ['Bipin & Vijaya Shah-6', 1],
        ['Bipin & Vijaya Shah-7', 1],
        ['Bipin & Vijaya Shah-8', 1],
        ['Suresh & Bina Shah-1', 1],
        ['Suresh & Bina Shah-2', 1],
        ['Suresh & Bina Shah-3', 1],
        ['Suresh & Bina Shah-4', 1],
        ['Rupen & Lajja Shah-1', 1],
        ['Rupen & Lajja Shah-2', 1],
        ['Rupen & Lajja Shah-3', 1],
        ['Rupen & Lajja Shah-4', 1],
        ['Hemesh & Pratiksha Shah-1', 1],
        ['Hemesh & Pratiksha Shah-2', 1],
        ['Hemesh & Pratiksha Shah-3', 1],
        ['Hemesh & Pratiksha Shah-4', 1],
        ['Kirit & Nina Shah-1', 1],
        ['Kirit & Nina Shah-2', 1],
        ['Kirit & Nina Shah-3', 1],
        ['Kirit & Nina Shah-4', 1],
        ['Dr. Prakash & Kirti Sanghvi-1', 1],
        ['Dr. Prakash & Kirti Sanghvi-2', 1],
        ['Dr. Prakash & Kirti Sanghvi-3', 1],
        ['Dr. Prakash & Kirti Sanghvi-4', 1],
        ['Sanjay & Anjana Dedhia-1', 1],
        ['Sanjay & Anjana Dedhia-2', 1],
        ['Sanjay & Anjana Dedhia-3', 1],
        ['Sanjay & Anjana Dedhia-4', 1],
        ['Avinash & Hema Rachmale-1', 1],
        ['Avinash & Hema Rachmale-2', 1],
        ['Avinash & Hema Rachmale-3', 1],
        ['Avinash & Hema Rachmale-4', 1],
        ['Sudeep & Abhilasha Jain-1', 1],
        ['Sudeep & Abhilasha Jain-2', 1],
        ['Sudeep & Abhilasha Jain-3', 1],
        ['Sudeep & Abhilasha Jain-4', 1],
        ['Akshat & Priyanka Jain-1', 1],
        ['Akshat & Priyanka Jain-2', 1],
        ['Akshat & Priyanka Jain-3', 1],
        ['Akshat & Priyanka Jain-4', 1],
        ['Kushant & Nirali Shah-1', 1],
        ['Kushant & Nirali Shah-2', 1],
        ['Kushant & Nirali Shah-3', 1],
        ['Kushant & Nirali Shah-4', 1],
        ['Vishal & Nisha Doshi-1', 1],
        ['Vishal & Nisha Doshi-2', 1],
        ['Vishal & Nisha Doshi-3', 1],
        ['Vishal & Nisha Doshi-4', 1],
        ['Vishal & Nisha Doshi-5', 1],
        ['Vishal & Nisha Doshi-6', 1],
        ['Vishal & Nisha Doshi-7', 1],
        ['Vishal & Nisha Doshi-8', 1],
        ['Bhavin & Ishani Dalal-1', 1],
        ['Bhavin & Ishani Dalal-2', 1],
        ['Bhavin & Ishani Dalal-3', 1],
        ['Bhavin & Ishani Dalal-4', 1],
        ['Bhavin & Ishani Dalal-5', 1],
        ['Bhavin & Ishani Dalal-6', 1],
        ['Bhavin & Ishani Dalal-7', 1],
        ['Bhavin & Ishani Dalal-8', 1],
        ['Pradeep and Madhu Modi-1', 1],
        ['Pradeep and Madhu Modi-2', 1],
        ['Pradeep and Madhu Modi-3', 1],
        ['Pradeep and Madhu Modi-4', 1],
        ['Pradeep and Madhu Modi-5', 1],
        ['Pradeep and Madhu Modi-6', 1],
        ['Pradeep and Madhu Modi-7', 1],
        ['Pradeep and Madhu Modi-8', 1],
        ['Amit and Usha Singhi-1', 1],
        ['Amit and Usha Singhi-2', 1],
        ['Amit and Usha Singhi-3', 1],
        ['Amit and Usha Singhi-4', 1],
        ['Amit and Usha Singhi-5', 1],
        ['Amit and Usha Singhi-6', 1],
        ['Amit and Usha Singhi-7', 1],
        ['Amit and Usha Singhi-8', 1],
        ['Vivek and Sheetal Agarwal-1', 1],
        ['Vivek and Sheetal Agarwal-2', 1],
        ['Vivek and Sheetal Agarwal-3', 1],
        ['Vivek and Sheetal Agarwal-4', 1],
        ['Vivek and Sheetal Agarwal-5', 1],
        ['Vivek and Sheetal Agarwal-6', 1],
        ['Vivek and Sheetal Agarwal-7', 1],
        ['Vivek and Sheetal Agarwal-8', 1],
        ['Pritish & Shreya Shah-1', 1],
        ['Pritish & Shreya Shah-2', 1],
        ['Pritish & Shreya Shah-3', 1],
        ['Pritish & Shreya Shah-4', 1],
        ['Pritish & Shreya Shah-5', 1],
        ['Pritish & Shreya Shah-6', 1],
        ['Pritish & Shreya Shah-7', 1],
        ['Pritish & Shreya Shah-8', 1],
        ['Amit & Megha Shah-1', 1],
        ['Amit & Megha Shah-2', 1],
        ['Amit & Megha Shah-3', 1],
        ['Amit & Megha Shah-4', 1],
        ['Amit & Megha Shah-5', 1],
        ['Amit & Megha Shah-6', 1],
        ['Amit & Megha Shah-7', 1],
        ['Amit & Megha Shah-8', 1],
        ['Jeet and Rama Sanghvi-1', 1],
        ['Jeet and Rama Sanghvi-2', 1],
        ['Jeet and Rama Sanghvi-3', 1],
        ['Jeet and Rama Sanghvi-4', 1],
        ['Jeet and Rama Sanghvi-5', 1],
        ['Jeet and Rama Sanghvi-6', 1],
        ['Jeet and Rama Sanghvi-7', 1],
        ['Jeet and Rama Sanghvi-8', 1],
        ['Chetan & Smita Koradia-1', 1],
        ['Chetan & Smita Koradia-2', 1],
        ['Chetan & Smita Koradia-3', 1],
        ['Chetan & Smita Koradia-4', 1],
        ['Chetan & Smita Koradia-5', 1],
        ['Chetan & Smita Koradia-6', 1],
        ['Chetan & Smita Koradia-7', 1],
        ['Chetan & Smita Koradia-8', 1],
        ['Chetan & Smita Koradia-9', 1],
        ['Chetan & Smita Koradia-10', 1],
        ['Dipa & Dimple Shah-1', 1],
        ['Dipa & Dimple Shah-2', 1],
        ['Dipa & Dimple Shah-3', 1],
        ['Dipa & Dimple Shah-4', 1],
        ['Dipa & Dimple Shah-5', 1],
        ['Dipa & Dimple Shah-6', 1],
        ['Dipa & Dimple Shah-7', 1],
        ['Dipa & Dimple Shah-8', 1],
        ['Dipa & Dimple Shah-9', 1],
        ['Dipa & Dimple Shah-10', 1],
        ['Dipa & Dimple Shah-11', 1],
        ['Dipa & Dimple Shah-12', 1],
        ['Saurabh & Prachi Shah-1', 1],
        ['Saurabh & Prachi Shah-2', 1],
        ['Saurabh & Prachi Shah-3', 1],
        ['Saurabh & Prachi Shah-4', 1],
        ['Saurabh & Prachi Shah-5', 1],
        ['Saurabh & Prachi Shah-6', 1],
        ['Saurabh & Prachi Shah-7', 1],
        ['Saurabh & Prachi Shah-8', 1],
        ['Saurabh & Prachi Shah-9', 1],
        ['Saurabh & Prachi Shah-10', 1],
        ['Saurabh & Prachi Shah-11', 1],
        ['Saurabh & Prachi Shah-12', 1],
        ['Naveen & Richa Jain-1', 1],
        ['Naveen & Richa Jain-2', 1],
        ['Naveen & Richa Jain-3', 1],
        ['Naveen & Richa Jain-4', 1],
        ['Naveen & Richa Jain-5', 1],
        ['Naveen & Richa Jain-6', 1],
        ['Naveen & Richa Jain-7', 1],
        ['Naveen & Richa Jain-8', 1],
        ['Naveen & Richa Jain-9', 1],
        ['Naveen & Richa Jain-10', 1],
        ['Naveen & Richa Jain-11', 1],
        ['Naveen & Richa Jain-12', 1],
        ['Pratik & Sangeen Shah-1', 1],
        ['Pratik & Sangeen Shah-2', 1],
        ['Pratik & Sangeen Shah-3', 1],
        ['Pratik & Sangeen Shah-4', 1],
        ['Pratik & Sangeen Shah-5', 1],
        ['Pratik & Sangeen Shah-6', 1],
        ['Pratik & Sangeen Shah-7', 1],
        ['Pratik & Sangeen Shah-8', 1],
        ['Pratik & Sangeen Shah-9', 1],
        ['Pratik & Sangeen Shah-10', 1],
        ['Pratik & Sangeen Shah-11', 1],
        ['Pratik & Sangeen Shah-12', 1],
        ['Pratik & Sangeen Shah-13', 1],
        ['Pratik & Sangeen Shah-14', 1],
        ['Pratik & Sangeen Shah-15', 1],
        ['Pratik & Sangeen Shah-16', 1],
        ['Pratik & Sangeen Shah-17', 1],
        ['Pratik & Sangeen Shah-18', 1],
        ['Nimesh & Rinku Shah-1', 1],
        ['Nimesh & Rinku Shah-2', 1],
        ['Nimesh & Rinku Shah-3', 1],
        ['Nimesh & Rinku Shah-4', 1],
        ['Nimesh & Rinku Shah-5', 1],
        ['Nimesh & Rinku Shah-6', 1],
        ['Nimesh & Rinku Shah-7', 1],
        ['Nimesh & Rinku Shah-8', 1],
        ['Nimesh & Rinku Shah-9', 1],
        ['Nimesh & Rinku Shah-10', 1],
        ['Nimesh & Rinku Shah-11', 1],
        ['Nimesh & Rinku Shah-12', 1],
        ['Nimesh & Rinku Shah-13', 1],
        ['Nimesh & Rinku Shah-14', 1],
        ['Nimesh & Rinku Shah-15', 1],
        ['Nimesh & Rinku Shah-16', 1],
        ['Nimesh & Rinku Shah-17', 1],
        ['Nimesh & Rinku Shah-18', 1],
        ['Nimesh & Rinku Shah-19', 1],
        ['Nimesh & Rinku Shah-20', 1],
        ['Anant & Rashmika Shah-1', 1],
        ['Anant & Rashmika Shah-2', 1],
        ['Anant & Rashmika Shah-3', 1],
        ['Anant & Rashmika Shah-4', 1],
        ['Anant & Rashmika Shah-5', 1],
        ['Anant & Rashmika Shah-6', 1],
        ['Rajen & Lona Mody-1', 1],
        ['Rajen & Lona Mody-2', 1],
        ['Rajen & Lona Mody-3', 1],
        ['Rajen & Lona Mody-4', 1],
        ['Rajen & Lona Mody-5', 1],
        ['Rajen & Lona Mody-6', 1],
        ['Rajen & Lona Mody-7', 1],
        ['Rajen & Lona Mody-8', 1],
        ['Jignesh & Jayshree Madhani-1', 1],
        ['Jignesh & Jayshree Madhani-2', 1],
        ['Jignesh & Jayshree Madhani-3', 1],
        ['Jignesh & Jayshree Madhani-4', 1],
        ['Jignesh & Jayshree Madhani-5', 1],
        ['Jignesh & Jayshree Madhani-6', 1],
        ['Jignesh & Jayshree Madhani-7', 1],
        ['Jignesh & Jayshree Madhani-8', 1],
        ['Nutan & Alka Shah-1', 1],
        ['Nutan & Alka Shah-2', 1],
        ['Nutan & Alka Shah-3', 1],
        ['Nutan & Alka Shah-4', 1],
        ['Nutan & Alka Shah-5', 1],
        ['Nutan & Alka Shah-6', 1],
        ['Nutan & Alka Shah-7', 1],
        ['Nutan & Alka Shah-8', 1],
        ['Rakesh & Lisa Sheth-1', 1],
        ['Rakesh & Lisa Sheth-2', 1],
        ['Rakesh & Lisa Sheth-3', 1],
        ['Rakesh & Lisa Sheth-4', 1],
        ['Rakesh & Lisa Sheth-5', 1],
        ['Rakesh & Lisa Sheth-6', 1],
        ['Rakesh & Lisa Sheth-7', 1],
        ['Rakesh & Lisa Sheth-8', 1],
        ['Rajesh and Vinita Jain-1', 1],
        ['Rajesh and Vinita Jain-2', 1],
        ['Rajesh and Vinita Jain-3', 1],
        ['Rajesh and Vinita Jain-4', 1],
        ['Rajesh and Vinita Jain-5', 1],
        ['Rajesh and Vinita Jain-6', 1],
        ['Rajesh and Vinita Jain-7', 1],
        ['Rajesh and Vinita Jain-8', 1],
        ['Manish & Kunjan Savla-1', 1],
        ['Manish & Kunjan Savla-2', 1],
        ['Manish & Kunjan Savla-3', 1],
        ['Manish & Kunjan Savla-4', 1],
        ['Manish & Kunjan Savla-5', 1],
        ['Manish & Kunjan Savla-6', 1],
        ['Manish & Madhu Salecha-1', 1],
        ['Manish & Madhu Salecha-2', 1],
        ['Manish & Madhu Salecha-3', 1],
        ['Manish & Madhu Salecha-4', 1],
        ['Manish & Madhu Salecha-5', 1],
        ['Manish & Madhu Salecha-6', 1],
        ['Lalit & Rachna Bhagat-1', 1],
        ['Lalit & Rachna Bhagat-2', 1],
        ['Lalit & Rachna Bhagat-3', 1],
        ['Lalit & Rachna Bhagat-4', 1],
        ['Lalit & Rachna Bhagat-5', 1],
        ['Lalit & Rachna Bhagat-6', 1],
        ['Ketur & Sejal Doshi-1', 1],
        ['Ketur & Sejal Doshi-2', 1],
        ['Ketur & Sejal Doshi-3', 1],
        ['Ketur & Sejal Doshi-4', 1],
        ['Ketur & Sejal Doshi-5', 1],
        ['Ketur & Sejal Doshi-6', 1],
        ['Kandarp(Kan) &Indu Doshi-1', 1],
        ['Kandarp(Kan) &Indu Doshi-2', 1],
        ['Kandarp(Kan) &Indu Doshi-3', 1],
        ['Kandarp(Kan) &Indu Doshi-4', 1],
        ['Manish & Minakshi Jain-1', 1],
        ['Manish & Minakshi Jain-2', 1],
        ['Manish & Minakshi Jain-3', 1],
        ['Manish & Minakshi Jain-4', 1],
        ['Kirit & Brenda Jones Ravani-1', 1],
        ['Kirit & Brenda Jones Ravani-2', 1],
        ['Kirit & Brenda Jones Ravani-3', 1],
        ['Kirit & Brenda Jones Ravani-4', 1],
        ['Lokesh & Khushi Nagori-1', 1],
        ['Lokesh & Khushi Nagori-2', 1],
        ['Lokesh & Khushi Nagori-3', 1],
        ['Lokesh & Khushi Nagori-4', 1],
        ['Dr. Jayant & Reena Sanghvi-1', 1],
        ['Dr. Jayant & Reena Sanghvi-2', 1],
        ['Dr. Jayant & Reena Sanghvi-3', 1],
        ['Dr. Jayant & Reena Sanghvi-4', 1],
        ['Bipin & Sohini Shah-1', 1],
        ['Bipin & Sohini Shah-2', 1],
        ['Bipin & Sohini Shah-3', 1],
        ['Bipin & Sohini Shah-4', 1],
        ['Amit & Kruti Sanghvi-1', 1],
        ['Amit & Kruti Sanghvi-2', 1],
        ['Amit & Kruti Sanghvi-3', 1],
        ['Amit & Kruti Sanghvi-4', 1],
        ['Pradeep & Divya Shah-1', 1],
        ['Pradeep & Divya Shah-2', 1],
        ['Pradeep & Divya Shah-3', 1],
        ['Pradeep & Divya Shah-4', 1],
        ['Pratik & Nehal Shah-1', 1],
        ['Pratik & Nehal Shah-2', 1],
        ['Pratik & Nehal Shah-3', 1],
        ['Pratik & Nehal Shah-4', 1],
        ['Dilip & Kalpana Shah-1', 1],
        ['Dilip & Kalpana Shah-2', 1],
        ['Dilip & Kalpana Shah-3', 1],
        ['Dilip & Kalpana Shah-4', 1],
        ['Hemang and Tejal Shah-1', 1],
        ['Hemang and Tejal Shah-2', 1],
        ['Hemang and Tejal Shah-3', 1],
        ['Hemang and Tejal Shah-4', 1],
        ['Deepak and Sujata Jhaveri-1', 1],
        ['Deepak and Sujata Jhaveri-2', 1],
        ['Deepak and Sujata Jhaveri-3', 1],
        ['Deepak and Sujata Jhaveri-4', 1],
        ['Vijay & Usha Vasani-1', 1],
        ['Vijay & Usha Vasani-2', 1],
        ['Vijay & Usha Vasani-3', 1],
        ['Vijay & Usha Vasani-4', 1],
        ['Ankit & Bina Shah-1', 1],
        ['Ankit & Bina Shah-2', 1],
        ['Ankit & Bina Shah-3', 1],
        ['Ankit & Bina Shah-4', 1],
        ['Narendra & Asha Sheth-1', 1],
        ['Narendra & Asha Sheth-2', 1],
        ['Narendra & Asha Sheth-3', 1],
        ['Narendra & Asha Sheth-4', 1],
        ['Hasmukh F Shah + Biren H Shah (Ketan)-1', 1],
        ['Hasmukh F Shah + Biren H Shah (Ketan)-2', 1],
        ['Hasmukh F Shah + Biren H Shah (Ketan)-3', 1],
        ['Hasmukh F Shah + Biren H Shah (Ketan)-4', 1],
        ['Jayant & Heena Shah-1', 1],
        ['Jayant & Heena Shah-2', 1],
        ['Jayant & Heena Shah-3', 1],
        ['Jayant & Heena Shah-4', 1],
        ['Ketan & Janki Shah-1', 1],
        ['Ketan & Janki Shah-2', 1],
        ['Ketan & Janki Shah-3', 1],
        ['Ketan & Janki Shah-4', 1],
        ['Pravin and Jyoti Shah-1', 1],
        ['Pravin and Jyoti Shah-2', 1],
        ['Pravin and Jyoti Shah-3', 1],
        ['Pravin and Jyoti Shah-4', 1],
        ['Chirag & Namrata Shah-1', 1],
        ['Chirag & Namrata Shah-2', 1],
        ['Chirag & Namrata Shah-3', 1],
        ['Chirag & Namrata Shah-4', 1],
        ['Jigar & Purvi Shah-1', 1],
        ['Jigar & Purvi Shah-2', 1],
        ['Jigar & Purvi Shah-3', 1],
        ['Jigar & Purvi Shah-4', 1],
        ['Niranjan & Vibha Shah-1', 1],
        ['Niranjan & Vibha Shah-2', 1],
        ['Niranjan & Vibha Shah-3', 1],
        ['Niranjan & Vibha Shah-4', 1],
        ['Hiral and Kritesh Mehta-1', 1],
        ['Hiral and Kritesh Mehta-2', 1],
        ['Hiral and Kritesh Mehta-3', 1],
        ['Hiral and Kritesh Mehta-4', 1],
        ['Sandhya Jain & Pramod Sharma-1', 1],
        ['Sandhya Jain & Pramod Sharma-2', 1],
        ['Sandhya Jain & Pramod Sharma-3', 1],
        ['Sandhya Jain & Pramod Sharma-4', 1],
        ['Jayprakash & Saroj Raisoni-1', 1],
        ['Jayprakash & Saroj Raisoni-2', 1],
        ['Jayprakash & Saroj Raisoni-3', 1],
        ['Jayprakash & Saroj Raisoni-4', 1],
        ['Vishal & Trupti Gogad-1', 1],
        ['Vishal & Trupti Gogad-2', 1],
        ['Vishal & Trupti Gogad-3', 1],
        ['Vishal & Trupti Gogad-4', 1],
        ['Raj & Shakuntla Jain-1', 1],
        ['Raj & Shakuntla Jain-2', 1],
        ['Raj & Shakuntla Jain-3', 1],
        ['Raj & Shakuntla Jain-4', 1],
        ['Akshat & Parul Jain-1', 1],
        ['Akshat & Parul Jain-2', 1],
        ['Akshat & Parul Jain-3', 1],
        ['Akshat & Parul Jain-4', 1],
        ['Dhaval & Disha Shah-1', 1],
        ['Dhaval & Disha Shah-2', 1],
        ['Dhaval & Disha Shah-3', 1],
        ['Dhaval & Disha Shah-4', 1],
        ['Nitin and Bindu Golechha-1', 1],
        ['Nitin and Bindu Golechha-2', 1],
        ['Nitin and Bindu Golechha-3', 1],
        ['Nitin and Bindu Golechha-4', 1],
        ['Shashikant& Devyani Dani-1', 1],
        ['Shashikant& Devyani Dani-2', 1],
        ['Shashikant& Devyani Dani-3', 1],
        ['Shashikant& Devyani Dani-4', 1],
        ['Suresh L & Rekha Shah-1', 1],
        ['Suresh L & Rekha Shah-2', 1],
        ['Suresh L & Rekha Shah-3', 1],
        ['Suresh L & Rekha Shah-4', 1],
        ['Vinay & Sneha Shah-1', 1],
        ['Vinay & Sneha Shah-2', 1],
        ['Vinay & Sneha Shah-3', 1],
        ['Vinay & Sneha Shah-4', 1],
        ['Sandeep and Manisha Garg-1', 1],
        ['Sandeep and Manisha Garg-2', 1],
        ['Sandeep and Manisha Garg-3', 1],
        ['Sandeep and Manisha Garg-4', 1],
        ['Anil & Savita Jain-1', 1],
        ['Anil & Savita Jain-2', 1],
        ['Anil & Savita Jain-3', 1],
        ['Anil & Savita Jain-4', 1],
        ['Kamal & Sunitha Jain-1', 1],
        ['Kamal & Sunitha Jain-2', 1],
        ['Kamal & Sunitha Jain-3', 1],
        ['Kamal & Sunitha Jain-4', 1],
        ['Anand and Mona Bora-1', 1],
        ['Anand and Mona Bora-2', 1],
        ['Anand and Mona Bora-3', 1],
        ['Anand and Mona Bora-4', 1],
        ['Babulal & mala Nahata-1', 1],
        ['Babulal & mala Nahata-2', 1],
        ['Babulal & mala Nahata-3', 1],
        ['Babulal & mala Nahata-4', 1],
        ['Jitesh & Kavita Shah-1', 1],
        ['Jitesh & Kavita Shah-2', 1],
        ['Jitesh & Kavita Shah-3', 1],
        ['Jitesh & Kavita Shah-4', 1],
        ['Arvind & Ramila Shah-1', 1],
        ['Arvind & Ramila Shah-2', 1],
        ['Arvind & Ramila Shah-3', 1],
        ['Arvind & Ramila Shah-4', 1],
        ['Sharad & Nalini Shah-1', 1],
        ['Sharad & Nalini Shah-2', 1],
        ['Sharad & Nalini Shah-3', 1],
        ['Sharad & Nalini Shah-4', 1],
        ['Kekin & Ami Sheth-1', 1],
        ['Kekin & Ami Sheth-2', 1],
        ['Kekin & Ami Sheth-3', 1],
        ['Kekin & Ami Sheth-4', 1],
        ['Nilesh & Hina Shah-1', 1],
        ['Nilesh & Hina Shah-2', 1],
        ['Nilesh & Hina Shah-3', 1],
        ['Nilesh & Hina Shah-4', 1],
        ['Apurva & Maitry Doshi-1', 1],
        ['Apurva & Maitry Doshi-2', 1],
        ['Apurva & Maitry Doshi-3', 1],
        ['Apurva & Maitry Doshi-4', 1],
        ['Biren & Avni Shah-1', 1],
        ['Biren & Avni Shah-2', 1],
        ['Biren & Avni Shah-3', 1],
        ['Biren & Avni Shah-4', 1],
        ['Manit & Jini Jain-1', 1],
        ['Manit & Jini Jain-2', 1],
        ['Manit & Jini Jain-3', 1],
        ['Manit & Jini Jain-4', 1],
        ['Keval Gada & Urvi Desai-1', 1],
        ['Keval Gada & Urvi Desai-2', 1],
        ['Keval Gada & Urvi Desai-3', 1],
        ['Keval Gada & Urvi Desai-4', 1],
        ['Abhishek & Shikha Jain-1', 1],
        ['Abhishek & Shikha Jain-2', 1],
        ['Abhishek & Shikha Jain-3', 1],
        ['Abhishek & Shikha Jain-4', 1],
        ['Puneet & Akanksha Jain-1', 1],
        ['Puneet & Akanksha Jain-2', 1],
        ['Puneet & Akanksha Jain-3', 1],
        ['Puneet & Akanksha Jain-4', 1],
        ['Jagdip And Anuja Joshi-1', 1],
        ['Jagdip And Anuja Joshi-2', 1],
        ['Jagdip And Anuja Joshi-3', 1],
        ['Jagdip And Anuja Joshi-4', 1],
        ['Sujit & Sonal Chokshi-1', 1],
        ['Sujit & Sonal Chokshi-2', 1],
        ['Sujit & Sonal Chokshi-3', 1],
        ['Sujit & Sonal Chokshi-4', 1],
        ['Mahendra &Veena Kavdia-1', 1],
        ['Mahendra &Veena Kavdia-2', 1],
        ['Mahendra &Veena Kavdia-3', 1],
        ['Mahendra &Veena Kavdia-4', 1],
        ['Shrayan & Jwala Gotadke-1', 1],
        ['Shrayan & Jwala Gotadke-2', 1],
        ['Shrayan & Jwala Gotadke-3', 1],
        ['Shrayan & Jwala Gotadke-4', 1],
        ['Amit & Shetu Dubey-1', 1],
        ['Amit & Shetu Dubey-2', 1],
        ['Amit & Shetu Dubey-3', 1],
        ['Amit & Shetu Dubey-4', 1],
        ['Girish & Ritika Salecha-1', 1],
        ['Girish & Ritika Salecha-2', 1],
        ['Mr & Mrs Brandon-1', 1],
        ['Mr & Mrs Brandon-2', 1],
        ['Paresh & Rita Shah-1', 1],
        ['Paresh & Rita Shah-2', 1],
        ['Piyush & Ruta Dave-1', 1],
        ['Piyush & Ruta Dave-2', 1],
        ['Mahendra Kapadia-1', 1],
        ['Mahendra Kapadia-2', 1],
        ['Venkat Gutta-1', 1],
        ['Venkat Gutta-2', 1],
        ['Ashok and Namita Jain-1', 1],
        ['Ashok and Namita Jain-2', 1],
        ['Shailesh & Jyoti Jain-1', 1],
        ['Shailesh & Jyoti Jain-2', 1],
        ['Rajnikant & Jyotsna ben Shah-1', 1],
        ['Rajnikant & Jyotsna ben Shah-2', 1],
        ['Bansi Shah-1', 1],
        ['Bansi Shah-2', 1],
        ['Nayna Parikh-1', 1],
        ['Nayna Parikh-2', 1],
        ['Bhausab Udagave-1', 1],
        ['Bhausab Udagave-2', 1],
        ['Charu Parekh-1', 1],
        ['Charu Parekh-2', 1],
        ['Hemali & Chandresh Doshi-1', 1],
        ['Hemali & Chandresh Doshi-2', 1],
        ['Hemant & Veena Shah-1', 1],
        ['Hemant & Veena Shah-2', 1],
        ['Nalin & Dipti Kothari-1', 1],
        ['Nalin & Dipti Kothari-2', 1],
        ['Dharmendra &Rachana Parakh-1', 1],
        ['Dharmendra &Rachana Parakh-2', 1],
        ['Niranjan & Sunetra Humbad-1', 1],
        ['Niranjan & Sunetra Humbad-2', 1],
        ['Payesh & Neepa Jhaveri-1', 1],
        ['Payesh & Neepa Jhaveri-2', 1],
        ['Amit & Rachna Jain-1', 1],
        ['Amit & Rachna Jain-2', 1],
        ['Chirag & Angel Shah-1', 1],
        ['Chirag & Angel Shah-2', 1],
        ['Ajay & Sujata Jain-1', 1],
        ['Ajay & Sujata Jain-2', 1],
        ['Ramesh & Sheela Shah-1', 1],
        ['Ramesh & Sheela Shah-2', 1],
        ['Purushottam & Manjul Deo-1', 1],
        ['Purushottam & Manjul Deo-2', 1],
        ['Ashok & Asha Jain-1', 1],
        ['Ashok & Asha Jain-2', 1],
        ['Anurag & Ritu Jain-1', 1],
        ['Anurag & Ritu Jain-2', 1],
        ['Ranjit and Shilpa Jain-1', 1],
        ['Ranjit and Shilpa Jain-2', 1],
        ['Sushil Kumar & Ranjana Jain-1', 1],
        ['Sushil Kumar & Ranjana Jain-2', 1],
        ['Vishal Khade & Deepti Dhariwal-1', 1],
        ['Vishal Khade & Deepti Dhariwal-2', 1],
        ['Niki & Asmi Mehta-1', 1],
        ['Niki & Asmi Mehta-2', 1],
        ['Nitin and Yamini Jain-1', 1],
        ['Nitin and Yamini Jain-2', 1],
        ['Dr Niranjan and Bharti Modi-1', 1],
        ['Dr Niranjan and Bharti Modi-2', 1],
        ['Dr. Ramesh & Sani Cheeda-1', 1],
        ['Dr. Ramesh & Sani Cheeda-2', 1],
        ['Mehul & Mansi Vaidya-1', 1],
        ['Mehul & Mansi Vaidya-2', 1],
        ['Girish & Asha Shah-1', 1],
        ['Girish & Asha Shah-2', 1],
        ['Ankur & Shefalee Vakharia-1', 1],
        ['Ankur & Shefalee Vakharia-2', 1],
        ['Vinit & Anuja Shah-1', 1],
        ['Vinit & Anuja Shah-2', 1],
        ['Jindas & Asha Shah-1', 1],
        ['Jindas & Asha Shah-2', 1],
        ['Lalit & Shobha Shah-1', 1],
        ['Lalit & Shobha Shah-2', 1],
        ['Hiren and Radhika Shah-1', 1],
        ['Hiren and Radhika Shah-2', 1],
        ['Supriya and Subrat Satpathy-1', 1],
        ['Supriya and Subrat Satpathy-2', 1],
        ['Jayprakash & Bharti Shah-1', 1],
        ['Jayprakash & Bharti Shah-2', 1],
        ['Rahul and Lalitha Khimasia-1', 1],
        ['Rahul and Lalitha Khimasia-2', 1],
        ['Jinansh & Priya Shah-1', 1],
        ['Jinansh & Priya Shah-2', 1],
        ['Avni & Aeraj Shah-1', 1],
        ['Avni & Aeraj Shah-2', 1],
        ['Drs. Ashwin and Anupama (Ana) Shah-1', 1],
        ['Drs. Ashwin and Anupama (Ana) Shah-2', 1],
        ['Rahul & Gayatri Munot-1', 1],
        ['Rahul & Gayatri Munot-2', 1],
        ['Ashoka and Kirti Jain-1', 1],
        ['Ashoka and Kirti Jain-2', 1],
        ['Bhupendra and Neena Shah-1', 1],
        ['Bhupendra and Neena Shah-2', 1],
        ['Viren & Apeksha Shah-1', 1],
        ['Viren & Apeksha Shah-2', 1],
        ['Deepali Jain & Chintan Shah-1', 1],
        ['Deepali Jain & Chintan Shah-2', 1],
        ['Rajiv & Reepal Shah-1', 1],
        ['Rajiv & Reepal Shah-2', 1],
        ['Sanjay & Manisha Bhandari-1', 1],
        ['Sanjay & Manisha Bhandari-2', 1],
        ['Govind Gangrade-1', 1],
        ['Smita Kothari-1', 1],
        ['Priyank Vora-1', 1],
        ['Ankit Gupta-1', 1],
        ['Arihant Jain -1', 1],
        ['Kamal & Parul Tolia-1', 1],
        ['Bhavesh & Ragini Kothari-1', 1],
        ['Bhavesh & Ragini Kothari-2', 1],
        ['Gaurav Jain-1', 1],
        ['Shantilal Shah (Amit Shah)-1', 1]
];

// Main Component
const NameSelector = () => {
    // Load nameMap from localStorage if it exists, otherwise fall back to the
    // default hardcoded list. Using the lazy-init form of useState so this only
    // runs once, on first mount.
    const [nameMap, setNameMap] = React.useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.NAMES);
            if (saved) {
                return new Map(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Failed to load saved names, using defaults:', error);
        }
        return new Map(DEFAULT_NAME_ENTRIES);
    });
    const [selectedName, setSelectedName] = React.useState('');
    const [newName, setNewName] = React.useState('');
    const [showDeleteOption, setShowDeleteOption] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isSpinning, setIsSpinning] = React.useState(false);
    const [singleName, setSingleName] = React.useState('');
    const [repeatCount, setRepeatCount] = React.useState(1);
    const [selectedForDelete, setSelectedForDelete] = React.useState(new Set());
    // Load draw history from localStorage the same way
    const [drawHistory, setDrawHistory] = React.useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (error) {
            console.error('Failed to load saved draw history:', error);
        }
        return [];
    });

    // Get total count of all names
    const getTotalNames = () => {
        return Array.from(nameMap.values()).reduce((sum, count) => sum + count, 0);
    };

    // Convert nameMap to flat array for random selection
    const getFlatNameArray = () => {
        const flatArray = [];
        for (const [name, count] of nameMap) {
            for (let i = 0; i < count; i++) {
                flatArray.push(name);
            }
        }
        return flatArray;
    };

    // Download draw history (manual only)
    const downloadDrawHistory = (history) => {
        if (history.length === 0) return;
        
        try {
            const ws = XLSX.utils.aoa_to_sheet([
                ['Draw Order', 'Selected Name', 'Date', 'Time'],
                ...history.map((draw, index) => {
                    const date = new Date(draw.timestamp);
                    return [
                        index + 1,
                        draw.name,
                        date.toLocaleDateString(),
                        date.toLocaleTimeString()
                    ];
                })
            ]);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Draw History');
            XLSX.writeFile(wb, `draw_history_${new Date().toISOString().split('T')[0]}.xlsx`);
        } catch (error) {
            console.error('Error downloading draw history:', error);
        }
    };

    const selectRandomName = () => {
        const flatNames = getFlatNameArray();
        if (flatNames.length === 0) {
            alert('No names available to select!');
            return;
        }
        
        setIsSpinning(true);
        setShowDeleteOption(false);
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * flatNames.length);
            const selected = flatNames[randomIndex];
            setSelectedName(selected);
            setIsSpinning(false);
            setShowDeleteOption(true);
            
            // Add to draw history
            const newDraw = {
                name: selected,
                timestamp: Date.now()
            };
            const updatedHistory = [...drawHistory, newDraw];
            setDrawHistory(updatedHistory);
        }, 2000);
    };

    const updateNameQuantity = (name, newQuantity) => {
        const newMap = new Map(nameMap);
        if (newQuantity <= 0) {
            newMap.delete(name);
        } else {
            newMap.set(name, newQuantity);
        }
        setNameMap(newMap);
    };

    const deleteAllOccurrences = () => {
        if (selectedName) {
            const newMap = new Map(nameMap);
            newMap.delete(selectedName);
            setNameMap(newMap);
            setSelectedName('');
            setShowDeleteOption(false);
        }
    };

    const addSingleName = () => {
        if (singleName.trim() && repeatCount > 0 && repeatCount <= 50) {
            const newMap = new Map(nameMap);
            const trimmedName = singleName.trim();
            const currentCount = newMap.get(trimmedName) || 0;
            newMap.set(trimmedName, currentCount + repeatCount);
            setNameMap(newMap);
            setSingleName('');
            setRepeatCount(1);
        }
    };

    const addName = () => {
        if (newName.trim()) {
            const namesToAdd = newName
                .split(/[,;\n]/)
                .map(name => name.trim())
                .filter(name => name.length > 0);
            
            if (namesToAdd.length > 0) {
                const newMap = new Map(nameMap);
                namesToAdd.forEach(name => {
                    const currentCount = newMap.get(name) || 0;
                    newMap.set(name, currentCount + 1);
                });
                setNameMap(newMap);
                setNewName('');
            }
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                
                const extractedNames = jsonData
                    .flat()
                    .filter(cell => cell && typeof cell === 'string' && cell.trim())
                    .map(name => String(name).trim());
                
                if (extractedNames.length > 0) {
                    const newMap = new Map();
                    extractedNames.forEach(name => {
                        const currentCount = newMap.get(name) || 0;
                        newMap.set(name, currentCount + 1);
                    });
                    setNameMap(newMap);
                    setSelectedName('');
                    setShowDeleteOption(false);
                    // Clear file input
                    event.target.value = '';
                } else {
                    alert('No valid names found in the Excel file.');
                }
            } catch (error) {
                console.error('File upload error:', error);
                alert('Error reading Excel file. Please make sure it\'s a valid .xlsx or .xls file.');
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const exportToExcel = () => {
        if (nameMap.size === 0) {
            alert('No names to export!');
            return;
        }

        try {
            const data = Array.from(nameMap.entries()).flatMap(([name, count]) => 
                Array(count).fill([name])
            );
            const ws = XLSX.utils.aoa_to_sheet([['Names'], ...data]);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Names');
            XLSX.writeFile(wb, 'names_list.xlsx');
        } catch (error) {
            console.error('Export error:', error);
            alert('Error exporting file. Please try again.');
        }
    };

    const clearAllNames = () => {
        if (window.confirm('Are you sure you want to clear all names? This action cannot be undone.')) {
            setNameMap(new Map());
            setSelectedName('');
            setShowDeleteOption(false);
            setSelectedForDelete(new Set());
        }
    };

    const toggleSelectForDelete = (name) => {
        const newSelected = new Set(selectedForDelete);
        if (newSelected.has(name)) {
            newSelected.delete(name);
        } else {
            newSelected.add(name);
        }
        setSelectedForDelete(newSelected);
    };

    const selectAllForDelete = () => {
        if (selectedForDelete.size === nameMap.size) {
            setSelectedForDelete(new Set());
        } else {
            setSelectedForDelete(new Set(nameMap.keys()));
        }
    };

    const deleteMassSelected = () => {
        if (selectedForDelete.size === 0) return;
        
        if (window.confirm(`Are you sure you want to delete ${selectedForDelete.size} selected entries?`)) {
            const newMap = new Map(nameMap);
            selectedForDelete.forEach(name => {
                newMap.delete(name);
            });
            setNameMap(newMap);
            setSelectedForDelete(new Set());
        }
    };

    const getSearchResults = () => {
        if (!searchTerm.trim()) return { matches: [], count: 0 };
        
        const searchLower = searchTerm.toLowerCase();
        const matches = Array.from(nameMap.entries()).filter(([name]) => 
            name.toLowerCase().includes(searchLower)
        );
        
        const totalCount = matches.reduce((sum, [, count]) => sum + count, 0);
        
        return { matches, count: totalCount };
    };

    const searchResults = getSearchResults();

    // Persist nameMap to localStorage whenever it changes
    React.useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.NAMES, JSON.stringify(Array.from(nameMap.entries())));
        } catch (error) {
            console.error('Failed to save names to localStorage:', error);
        }
    }, [nameMap]);

    // Persist draw history to localStorage whenever it changes
    React.useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(drawHistory));
        } catch (error) {
            console.error('Failed to save draw history to localStorage:', error);
        }
    }, [drawHistory]);

    // Handle keyboard shortcuts
    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                if (!isSpinning && getTotalNames() > 0) {
                    selectRandomName();
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isSpinning, nameMap]);

    // NOTE: Data is now saved to localStorage automatically (see the two
    // useEffect hooks above), so refreshing the page no longer loses the
    // name list or draw history. The old "are you sure you want to leave"
    // warning has been removed since it's no longer accurate.

    return React.createElement('div', { className: "max-w-4xl mx-auto p-6 rounded-lg main-container" },
        React.createElement('h1', { className: "text-3xl font-bold text-center mb-2 text-gray-800" }, 'JSGD Fundraising Dinner Raffle'),
        React.createElement('p', { className: "text-center text-sm text-gray-600 mb-8" }, 'By Bhaaniu Jain'),
        
        // Random Selection Section - Moved to top
        React.createElement('div', { className: "mb-8 p-6 event-background rounded-lg" },
            React.createElement('div', { className: "text-center mb-6" },
                React.createElement('div', { className: "relative inline-block mb-6" },
                    React.createElement('div', { 
                        className: `w-32 h-32 rounded-full draw-wheel mx-auto ${isSpinning ? 'spin-wheel' : ''}` 
                    },
                        React.createElement('div', { className: "draw-pointer" })
                    )
                ),
                React.createElement('button', {
                    onClick: selectRandomName,
                    disabled: getTotalNames() === 0 || isSpinning,
                    className: "px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-lg font-semibold flex items-center mx-auto shadow-lg transition-colors"
                },
                    React.createElement(Shuffle, { className: "mr-2", size: 24 }),
                    isSpinning ? 'Drawing...' : 'Draw Random Name'
                ),
                getTotalNames() > 0 && React.createElement('p', { className: "text-sm text-gray-600 mt-2" },
                    `Ready to draw from ${getTotalNames()} entries • Press Ctrl+Enter`
                )
            ),

            // Selected Name Display
            (selectedName || isSpinning) && React.createElement('div', { className: "border-l-4 border-yellow-500 p-6 rounded-r-lg" },
                React.createElement('h3', { className: "text-xl font-semibold text-yellow-800 mb-4" }, 
                    isSpinning ? 'Drawing Random Name...' : '🎉 Winner:'
                ),
                isSpinning 
                    ? React.createElement('div', { className: "text-center py-4" },
                        React.createElement('div', { className: "text-lg text-yellow-700" }, 'Spinning the wheel...')
                    )
                    : React.createElement('div', {},
                        React.createElement('div', { className: "text-3xl font-bold text-yellow-900 text-center mb-4" }, selectedName),
                        
                        showDeleteOption && React.createElement('div', { className: "text-center" },
                            React.createElement('p', { className: "text-yellow-700 mb-3" },
                                `"${selectedName}" has ${nameMap.get(selectedName) || 0} occurrence(s) remaining`
                            ),
                            React.createElement('button', {
                                onClick: deleteAllOccurrences,
                                className: "px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center mx-auto transition-colors"
                            },
                                React.createElement(Trash2, { className: "mr-2", size: 16 }),
                                `Remove All "${selectedName}"`
                            )
                        )
                    )
            )
        ),
        
        // File Upload Section
        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Upload, { className: "mr-2", size: 20 }),
                'Upload Excel File'
            ),
            React.createElement('input', {
                type: 'file',
                accept: '.xlsx,.xls',
                onChange: handleFileUpload,
                className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            }),
            React.createElement('p', { className: "text-sm text-gray-600 mt-2" }, 'Upload an Excel file (.xlsx or .xls) containing names')
        ),

        // Manual Name Addition
        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Plus, { className: "mr-2", size: 20 }),
                'Add Names Manually'
            ),
            
            // Single Name with Repeat Count
            React.createElement('div', { className: "mb-4 p-3 rounded-lg transparent-box" },
                React.createElement('h3', { className: "text-sm font-medium text-gray-700 mb-2" }, 'Add Single Name Multiple Times'),
                React.createElement('div', { className: "flex gap-2 items-center" },
                    React.createElement('input', {
                        type: 'text',
                        value: singleName,
                        onChange: (e) => setSingleName(e.target.value),
                        onKeyPress: (e) => e.key === 'Enter' && addSingleName(),
                        placeholder: 'Enter a name',
                        className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    }),
                    React.createElement('input', {
                        type: 'number',
                        value: repeatCount,
                        onChange: (e) => setRepeatCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1))),
                        min: 1,
                        max: 50,
                        className: "w-16 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-center"
                    }),
                    React.createElement('span', { className: "text-sm text-gray-600" }, 'times'),
                    React.createElement('button', {
                        onClick: addSingleName,
                        disabled: !singleName.trim(),
                        className: "px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center text-sm transition-colors"
                    },
                        React.createElement(Plus, { size: 14, className: "mr-1" }),
                        'Add'
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-500 mt-1" }, 'Add the same name 1-50 times at once')
            ),

            // Multiple Names Section  
            React.createElement('div', { className: "p-3 rounded-lg transparent-box" },
                React.createElement('h3', { className: "text-sm font-medium text-gray-700 mb-2" }, 'Add Multiple Different Names'),
                React.createElement('div', { className: "space-y-2" },
                    React.createElement('textarea', {
                        value: newName,
                        onChange: (e) => setNewName(e.target.value),
                        placeholder: 'Enter names (separate multiple names with commas, semicolons, or new lines)\nExample: John, Mary; Bob\nSarah',
                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none text-sm",
                        rows: 3
                    }),
                    React.createElement('button', {
                        onClick: addName,
                        disabled: !newName.trim(),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center transition-colors"
                    },
                        React.createElement(Plus, { size: 16, className: "mr-1" }),
                        'Add Names'
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-500 mt-1" }, 'Separate with commas, semicolons, or new lines')
            )
        ),

        // Search Section
        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Search, { className: "mr-2", size: 20 }),
                'Search & Edit Names'
            ),
            React.createElement('div', { className: "space-y-2" },
                React.createElement('input', {
                    type: 'text',
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    placeholder: 'Search for a name...',
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                }),
                searchTerm.trim() && React.createElement('div', { className: "text-sm text-blue-700" },
                    searchResults.count > 0 
                        ? `Found ${searchResults.matches.length} name(s) with ${searchResults.count} total occurrences`
                        : `No matches found for "${searchTerm}"`
                ),
                searchTerm.trim() && searchResults.matches.length > 0 && React.createElement('div', { className: "space-y-2 mt-3" },
                    searchResults.matches.map(([name, count]) =>
                        React.createElement('div', { 
                            key: name,
                            className: "px-3 py-2 rounded-lg flex justify-between items-center transparent-box"
                        },
                            React.createElement('span', { className: "font-medium" }, `${name} (${count} times)`),
                            React.createElement('div', { className: "flex items-center gap-2" },
                                React.createElement('button', {
                                    onClick: () => updateNameQuantity(name, count - 1),
                                    className: "p-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                                }, React.createElement(Minus, { size: 16 })),
                                React.createElement('input', {
                                    type: 'number',
                                    value: count,
                                    onChange: (e) => updateNameQuantity(name, Math.max(0, parseInt(e.target.value) || 0)),
                                    className: "quantity-input px-2 py-1 border border-gray-300 rounded text-center text-sm",
                                    min: 0
                                }),
                                React.createElement('button', {
                                    onClick: () => updateNameQuantity(name, count + 1),
                                    className: "p-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors"
                                }, React.createElement(Plus, { size: 16 }))
                            )
                        )
                    )
                )
            )
        ),

        // Current Names Display
        React.createElement('div', { className: "mb-6" },
            React.createElement('div', { className: "flex justify-between items-center mb-3" },
                React.createElement('h2', { className: "text-lg font-semibold" }, 
                    `Current Names (${nameMap.size} unique, ${getTotalNames()} total)`
                ),
                React.createElement('div', { className: "flex gap-2 flex-wrap" },
                    nameMap.size > 0 && React.createElement('button', {
                        onClick: selectAllForDelete,
                        className: "px-2 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center text-xs transition-colors"
                    },
                        selectedForDelete.size === nameMap.size ? 'Deselect All' : 'Select All'
                    ),
                    selectedForDelete.size > 0 && React.createElement('button', {
                        onClick: deleteMassSelected,
                        className: "px-3 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center text-sm transition-colors"
                    },
                        React.createElement(Trash2, { size: 14, className: "mr-1" }),
                        `Delete ${selectedForDelete.size}`
                    ),
                    React.createElement('button', {
                        onClick: exportToExcel,
                        className: "px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center text-sm transition-colors",
                        disabled: nameMap.size === 0
                    },
                        React.createElement(Download, { size: 14, className: "mr-1" }),
                        'Export'
                    ),
                    React.createElement('button', {
                        onClick: clearAllNames,
                        className: "px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center text-sm transition-colors",
                        disabled: nameMap.size === 0
                    },
                        React.createElement(Trash2, { size: 14, className: "mr-1" }),
                        'Clear All'
                    )
                )
            ),
            
            nameMap.size > 0 ?
                React.createElement('div', { className: "p-4 rounded-lg max-h-60 overflow-y-auto transparent-section" },
                    React.createElement('div', { className: "space-y-2" },
                        Array.from(nameMap.entries())
                            .sort(([a], [b]) => a.localeCompare(b))
                            .map(([name, count]) =>
                            React.createElement('div', { 
                                key: name,
                                className: `px-3 py-2 rounded-lg text-sm flex justify-between items-center transition-colors transparent-box ${selectedForDelete.has(name) ? 'bg-red-100 bg-opacity-50' : ''}`
                            },
                                React.createElement('div', { className: "flex items-center gap-2" },
                                    React.createElement('input', {
                                        type: 'checkbox',
                                        checked: selectedForDelete.has(name),
                                        onChange: () => toggleSelectForDelete(name),
                                        className: "rounded"
                                    }),
                                    React.createElement('span', { className: "font-medium" }, `${name} (${count} times)`)
                                ),
                                React.createElement('div', { className: "flex items-center gap-2" },
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, count - 1),
                                        className: "p-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors",
                                        title: "Decrease quantity"
                                    }, React.createElement(Minus, { size: 16 })),
                                    React.createElement('input', {
                                        type: 'number',
                                        value: count,
                                        onChange: (e) => updateNameQuantity(name, Math.max(0, parseInt(e.target.value) || 0)),
                                        className: "quantity-input px-2 py-1 border border-gray-300 rounded text-center text-sm",
                                        min: 0
                                    }),
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, count + 1),
                                        className: "p-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors",
                                        title: "Increase quantity"
                                    }, React.createElement(Plus, { size: 16 })),
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, 0),
                                        className: "p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors",
                                        title: "Delete all occurrences"
                                    }, React.createElement(X, { size: 16 }))
                                )
                            )
                        )
                    )
                ) :
                React.createElement('p', { className: "text-gray-500 text-center py-8" }, 'No names available. Upload a file or add names manually.'),
            
            // Draw History Section
            drawHistory.length > 0 && React.createElement('div', { className: "mt-6 p-4 rounded-lg transparent-section" },
                React.createElement('div', { className: "flex items-center justify-between mb-3" },
                    React.createElement('h3', { className: "text-lg font-semibold text-gray-800 flex items-center" }, 
                        React.createElement(History, { className: "mr-2", size: 20 }),
                        `Draw History (${drawHistory.length} draws)`
                    ),
                    React.createElement('button', {
                        onClick: () => downloadDrawHistory(drawHistory),
                        className: "px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center text-sm transition-colors"
                    },
                        React.createElement(Download, { size: 14, className: "mr-1" }),
                        'Download'
                    )
                ),
                React.createElement('div', { className: "max-h-32 overflow-y-auto" },
                    React.createElement('div', { className: "space-y-1" },
                        drawHistory.slice(-50).reverse().map((draw, index) => {
                            const actualIndex = drawHistory.length - index;
                            return React.createElement('div', { 
                                key: draw.timestamp,
                                className: "text-sm flex justify-between items-center px-3 py-1 rounded transparent-box"
                            },
                                React.createElement('span', { className: "font-medium" }, 
                                    `${actualIndex}. ${draw.name}`
                                ),
                                React.createElement('span', { className: "text-gray-500 text-xs" }, 
                                    new Date(draw.timestamp).toLocaleTimeString()
                                )
                            );
                        })
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-700 mt-2" }, 
                    'Click Download button above to save history • Showing last 50 draws'
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(NameSelector), document.getElementById('root'));

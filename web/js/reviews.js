console.log("Loaded ========");

const reviewList = [
  {
    id: 1,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Doe",
    job: "Web Developer",
    img: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    review:
      "Unforgettable Adventure! From start to finish, Daybreak exceeded our expectations.",
  },
  {
    id: 2,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Smith",
    job: "Graphic Designer",
    img: "./images/review2.jpg",
    review:
      "Seamless organization, friendly guides, and a truly memorable experience. Highly recommend!",
  },
  {
    id: 3,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bob Johnson",
    job: "Software Engineer",
    img: "./images/review3.jpg",
    review:
      "Outstanding customer service, and the complimentary beverages added a delightful touch to the experience.",
  },
  {
    id: 4,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Doe",
    job: "Web Developer",
    img: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    review:
      "Well-organized private tours, comfortable travel, and the avoidance of cramped buses—this tour company knows how to create a seamless and spacious experience",
  },
  {
    id: 5,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Smith",
    job: "Graphic Designer",
    img: "./images/review2.jpg",
    review:
      "The traveler's guide was a brilliant addition, offering fascinating insights into each destination. A perfect blend of fun and education—highly recommended!",
  },
  {
    id: 6,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bob Johnson",
    job: "Software Engineer",
    img: "./images/review3.jpg",
    review:
      "Outstanding customer service from booking to the trip's end. Responsive, accommodating, and dedicated staff!",
  },
  {
    id: 7,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Smith",
    job: "Graphic Designer",
    img: "./images/review2.jpg",
    review:
      "Well-organized, comfortable, and stress-free. This tour company knows how to create a seamless experience. Highly impressed!",
  },
  {
    id: 8,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bob Johnson",
    job: "Software Engineer",
    img: "./images/review3.jpg",
    review:
      "Unique and authentic encounters set this tour apart. Explored hidden gems and connected with the local culture. A truly special journey.",
  },
];

const reviewerName = document.getElementById("reviewer_name");
const reviewerJob = document.getElementById("reviewer_job");
const reviewerText = document.getElementById("reviewer_text");
const reviewerImage = document.getElementById("review_image");
const reviewerprofilePic = document.getElementById("reviewer_profilePic");

let index = 0;

onReviewChange();

setInterval(function() {
  onReviewChange(true);
}, 7000);

function onReviewChange(isForward) {
  if (isForward && index < reviewList.length - 1) {
    ++index;
  } else if (!isForward && index > 0) {
    --index;
  } else {
    index = 0;
  }

  $("#reviewer_name").fadeOut(500, function () {
    $(this).text(reviewList[index].name).fadeIn(500);
  });
  $("#reviewer_job").fadeOut(500, function () {
    $(this).text(reviewList[index].job).fadeIn(500);
  });
  $("#reviewer_text").fadeOut(500, function () {
    $(this).text(reviewList[index].review).fadeIn(500);
  });
  $("#review_image").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].img).fadeIn(500);
  });
  $("#reviewer_profilePic").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].profilePic).fadeIn(500);
  });
}

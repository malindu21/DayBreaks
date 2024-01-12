console.log("Loaded ========");

const reviewList = [
  {
    id: 1,
    profilePic:
      "images/reviews/review_avatar1.jpg",
    name: "Michael Roberts",
    job: "",
    img: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    review:
      "Unforgettable Adventure! From start to finish, Daybreak exceeded our expectations.",
  },
  {
    id: 2,
    profilePic:
      "images/reviews/review_avatar2.jpg",
    name: "Alice Smith",
    job: "",
    img: "./images/review2.jpg",
    review:
      "Seamless organization, friendly guides, and a truly memorable experience. Highly recommend!",
  },
  {
    id: 3,
    profilePic:
      "images/reviews/review_avatar3.jpg",
    name: "David Nguyen ",
    job: "",
    img: "./images/review3.jpg",
    review:
      "Outstanding customer service, and the complimentary beverages added a delightful touch to the experience.",
  },
  {
    id: 4,
    profilePic:
      "images/reviews/review_avatar4.jpg",
    name: "Sarah Lopez",
    job: "",
    img: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    review:
      "Well-organized private tours, comfortable travel, and the avoidance of cramped buses—this tour company knows how to create a seamless and spacious experience",
  },
  {
    id: 5,
    profilePic:
      "images/reviews/review_avatar5.jpg",
    name: "Daniel Garcia ",
    job: "",
    img: "./images/review2.jpg",
    review:
      "The traveler's guide was a brilliant addition, offering fascinating insights into each destination. A perfect blend of fun and education—highly recommended!",
  },
  {
    id: 6,
    profilePic:
      "images/reviews/review_avatar6.jpg",
    name: "Rebecca Singh",
    job: "",
    img: "./images/review3.jpg",
    review:
      "Outstanding customer service from booking to the trip's end. Responsive, accommodating, and dedicated staff!",
  },
  {
    id: 7,
    profilePic:
      "images/reviews/review_avatar7.jpg",
    name: "Christopher Patel",
    job: "",
    img: "./images/review2.jpg",
    review:
      "Well-organized, comfortable, and stress-free. This tour company knows how to create a seamless experience. Highly impressed!",
  },
  {
    id: 8,
    profilePic:
      "images/reviews/review_avatar8.jpg",
    name: "Emily Martinez",
    job: "",
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
    var review = reviewList[index].review;

    // Split the string into the review text and the reviewer name
    var splitReview = review.split('-');
    var reviewText = review.replace(/"/g, '').trim();  // Remove double quotes
    var reviewerName = reviewList[index].name.replace(/"/g, '').trim(); // Remove double quotes
  
    // Set the content of the <q> element with the formatted text
    var formattedReview = '"' + reviewText + '" - ' + reviewerName;
  
    // Set the text and fadeIn
    $(this).text(formattedReview).fadeIn(500);

  });
  $("#review_image").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].img).fadeIn(500);
  });
  $("#reviewer_profilePic").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].profilePic).fadeIn(500);
  });
}

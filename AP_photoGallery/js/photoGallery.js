var app = angular.module('photoGallery', []);
app.controller('galleryCtrl', function($scope) {
    $scope.images= [
        {image: "images/img_1.png", full_image: "images/full_images/img_1_full.png", thumbnail: "images/thumbnails/img_1_thumbnail.png"},
        {image: "images/img_2.png", full_image: "images/full_images/img_2_full.png", thumbnail: "images/thumbnails/img_2_thumbnail.png"},
        {image: "images/img_3.png", full_image: "images/full_images/img_3_full.png", thumbnail: "images/thumbnails/img_3_thumbnail.png"},
        {image: "images/img_4.png", full_image: "images/full_images/img_4_full.png", thumbnail: "images/thumbnails/img_4_thumbnail.png"}
    ];
    
    $scope.hide_fullImage = "true";
    // Set initial display to first image
    $scope.currentImage = $scope.images[0];
    $scope.currentIndex = 0;
    
    // Set the display to the clicked thumbnail image
    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
        $scope.currentIndex = $scope.images.indexOf(image);
    };
    
    // Set the display to the previous image
    $scope.setPreviousImage = function(){
        $scope.currentIndex = ($scope.currentIndex-1);
        if ($scope.currentIndex < 0){
            $scope.currentIndex = 3;
        }
        $scope.currentImage = $scope.images[$scope.currentIndex];
    };
    
    // Set the display to the next image
    $scope.setNextImage = function(){
        $scope.currentIndex = ($scope.currentIndex+1);
        if ($scope.currentIndex > 3){
            $scope.currentIndex = 0;
        }
        $scope.currentImage = $scope.images[$scope.currentIndex];
    };
    
    $scope.zoomImage = function(){
        $scope.hide_fullImage = false;
        previewBox.style.visibility = "hidden";
        navigationBox.style.visibility = "hidden";
        thumbnailWrapper.style.visibility = "hidden";
    }
    
    $scope.hideFullImage = function(){
        $scope.hide_fullImage = true;
        previewBox.style.visibility = "visible";
        navigationBox.style.visibility = "visible";
        thumbnailWrapper.style.visibility = "visible";
    }
});   

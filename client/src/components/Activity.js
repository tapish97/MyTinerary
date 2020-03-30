import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { getActivities } from '../store/actions/actActions';
import '../styles/carousel.css';

class Activity extends Component {
  componentDidMount() {
    let id = this.props.itineraryId;
    this.props.getActivities(id);
    console.log(id);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const { activities } = this.props.activities;
    console.log(activities);
    // const activityArray = activities.length > 0 ? activities : null;
    return (
      <div className='Carousel'>
        <h5> Activities </h5>
        <Slider {...settings}>
          {activities != null ? (
            activities.map((a) => {
              return (
                <div className='Carousel-activity-item' key={a._id}>
                  <h3
                    className='Carousel-activity-title'
                    style={{ backgroundImage: `url(${a.img})` }}>
                    {a.name}
                  </h3>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps, { getActivities })(Activity);
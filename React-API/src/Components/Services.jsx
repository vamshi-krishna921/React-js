import React, { use } from 'react';
import { useEffect } from 'react';

const Services = () => {
useEffect(() => {
    console.log("Services component mounted");
    return () => {
        console.log("Services component unmounted");
    }
})
  return (
    <div>Services</div>
  )
}

export default Services
import React from "react";
import gql from "graphql-tag";

export const LaunchesInfo = gql`
  query LaunchesInfo {
    launches {
      mission_name
      launch_success
      rocket {
        rocket_name
      }
    }
  }
`;

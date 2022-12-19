export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this..addNeighborhood = (newNeighborhood) => {
    self.sanFranciscooNeighborhoods.push(newNeighborhood);
    return self.anFranciscoNeighborhoods;
  };
}

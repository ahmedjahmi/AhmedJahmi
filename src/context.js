import React, { Component } from 'react';
import { myProjects, detailProject } from "./data";

const ProjectContext = React.createContext();
// Provider
// Consumer

class ProjectProvider extends Component {
  state = {
    // projects property set to empty array to not reference/accidentally change
    // myProjects objects in the data.
    projects: [], 
    detailProject: detailProject,
    // modalOpen: true,
    // modalProject: detailProject
  };

  componentDidMount() {
    this.setProjects();
  }

  // setProject method wrote to handle the work around of the comment below 'state'

  setProjects = () => {
    let tempProjects = [];
    myProjects.forEach(item => {
      const singleItem = {...item};
      tempProjects = [...tempProjects, singleItem]
    });
    this.setState(()=>{
      return {projects: tempProjects};
    });
  };

  // this method gets the project from the state based on id
  getItem = (id) => {
    const project = this.state.projects.find(item => item.id === id);
    return project;
  }

  //  this method uses the getItem method to take the project returned in getItem
  // and setting the project to the state's detailProject.
  // this method will be passed to the onClick method of the project img-container
  handleDetail = (id) => {
    const project = this.getItem(id);
    this.setState(()=>{
      return { detailProject: project}
    })
  };

  // openModal = (id) => {
  //   const project = this.getItem(id);
  //   this.setState(()=>{
  //     return {
  //       modalProject: project,
  //       modalOpen: true,
  //     }
  //   })
  // }

  // closeModal = () => {
  //   this.setState(()=>{
  //     return {
  //       modalOpen: false
  //     }
  //   })
  // }

  render() {
    return (
      <ProjectContext.Provider
        value = {{
          // ...this.state -> destructures the state above that holds 'projects' & 'detailProject'
          ...this.state,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
};

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer};
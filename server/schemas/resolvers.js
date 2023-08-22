const Project = require('../models/Project');

module.exports = {
    Query: {
        projects: async () => {
            try {
                return await Project.find();
            } catch (error) {
                console.error(error);
                throw new Error('Something went wrong fetching projects!');
            }
        },
    },
    Mutation: {
        addProject: async (_, { title, description, link, image }) => {
            try {
                const project = new Project({ title, description, link, image });
                return await project.save();
            } catch (error) {
                console.error(error);
                throw new Error('Could not save project!');
            }
        }
    }
}
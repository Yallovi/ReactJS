import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activedEditMode =  () =>{
        this.setState({
            editMode: true
        });
        // this.state.editMode = true;
    }
    deactivedEditMode = () =>{
        this.setState({
            editMode: false
        });
       this.props.uppdateUserStatus(this.state.status);
    };
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    copmonentDidUpdate(prevProps, prevState){
            if(prevProps.status !== this.props.status){
                this.state({
                    status: this.props.status
                })
            }
    }
    render() {
    return (
      <div>
        {!this.state.editMode &&
            <div> 
                <span onDoubleClick={this.activedEditMode}> {this.props.status || '----'} </span> 
            </div>
        }
        {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deactivedEditMode} />
            </div>
        }
      </div>
    )
    }
}
export default ProfileStatus;
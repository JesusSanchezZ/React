import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {
    const {isSaving, active } = useSelector(status => status.journal);
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus exercitationem voluptate obcaecati! Eveniet veritatis, vel velit recusandae repellat, atque repudiandae repellendus facilis aliquid voluptatibus quisquam nostrum dolor odio. Mollitia.</Typography> */}
            {/* {
                (active === null)
                ? <NothingSelectedView />
                : <NoteView />
            } */}

            {
                (!!active) ? <NoteView />: <NothingSelectedView />
            }

            <IconButton
                disabled={ isSaving }
                onClick={ onClickNewNote }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    )
}
import { Badge, Heading, Stack } from "@chakra-ui/react";
import { getTagName, getTagColor } from "../../_content/_projects";

function ProjectFooter({heading, tags}) {
    return(
        <div style={{ display: 'inline-flex', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexGrow: '1',
            flexDirection: 'column',
            gap: '5px',
          }}>
          <Heading size={'sm'}>{heading}</Heading>
          <Stack direction="row">
            {tags.map(tag => (
              <Badge key={tag} variant="subtle" colorScheme={getTagColor(tag)}>
                {getTagName(tag)}
              </Badge>
            ))}
          </Stack>
        </div>
      </div>
    )
}

export default ProjectFooter
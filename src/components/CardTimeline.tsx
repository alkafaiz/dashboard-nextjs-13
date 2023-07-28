import { useDelay } from '@/utils/helper';
import { Avatar, Box, Card, Divider, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export interface TimelineItem {
    title: string;
    createdAt: string;
    iconSrc: string;
}

interface CardTimelineProps {
    title: string;
    description: React.ReactNode;
    timelineItems: TimelineItem[];
}

function CardTimeline({ title, description, timelineItems }: CardTimelineProps & { children?: React.ReactNode }) {
    const isDisplayed = useDelay(800);

    return (
        <Card flexGrow={1} rounded={'xl'} p={4}>
            <Heading fontSize={'lg'} mb={1}>
                {title}
            </Heading>
            {isDisplayed ? (
                <>
                    {description && typeof description === 'string' ? (
                        <Text fontSize={'xs'} color={'gray.500'}>
                            {description}
                        </Text>
                    ) : null}
                    {description && typeof description !== 'string' ? description : null}
                </>
            ) : (
                <Skeleton height="18px" width={'90px'} />
            )}
            <Stack
                spacing={1}
                mt={5}
                pb={3}
                maxH={400}
                divider={
                    <Box minH={7} height={10} borderBottom={0}>
                        <Divider orientation="vertical" ml={2} borderColor={'gray.300'} />
                    </Box>
                }
            >
                {timelineItems.map((item, index) => (
                    <TimelineItem key={index} isLoading={!isDisplayed} {...item} />
                ))}
            </Stack>
        </Card>
    );
}

function TimelineItem({
    title,
    createdAt,
    iconSrc,
    isLoading,
}: {
    title: string;
    createdAt: string;
    iconSrc: string;
    isLoading?: boolean;
}) {
    return (
        <Flex alignItems={'center'}>
            {isLoading ? (
                <Skeleton height="16px" width={'24px'} mr={2} />
            ) : (
                <Avatar src={iconSrc} size={'xs'} mr={2} sx={{ width: 4, height: 4, ' img': { borderRadius: 0 } }} />
            )}
            <Box ml={2} pos={'relative'}>
                {isLoading ? (
                    <>
                        <Skeleton height="18px" width={'160px'} mb={1} />
                        <Skeleton height="18px" width={'120px'} position={'absolute'} top={5} />
                    </>
                ) : (
                    <>
                        <Text fontSize={'xs'} fontWeight={'bold'}>
                            {title}
                        </Text>
                        <Text fontSize={'xs'} color={'gray.500'} position={'absolute'} top={4}>
                            {createdAt}
                        </Text>
                    </>
                )}
            </Box>
        </Flex>
    );
}

export default CardTimeline;
